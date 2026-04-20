<template>
  <div class="flex flex-col lg:flex-row gap-4">
    <div class="flex-1 min-w-0">
      <div class="border-2 border-gray-700 dark:border-gray-600 rounded-lg overflow-hidden">
        <div class="flex bg-gray-800 border-b border-gray-700">
          <button
            v-for="tab in tabList"
            :key="tab.id"
            class="px-4 py-2 text-sm font-medium transition-colors relative cursor-pointer"
            :class="activeTab === tab.id
              ? 'text-white bg-gray-700'
              : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50'"
            @click="switchTab(tab.id)"
          >
            {{ tab.label }}
            <div
              v-if="activeTab === tab.id"
              class="absolute bottom-0 left-0 right-0 h-0.5"
              :style="{ background: tab.color }"
            />
          </button>
        </div>
        <div class="relative">
          <div ref="editorContainer" class="h-[300px] w-full" />
          <div class="flex gap-2 absolute bottom-0 right-0 m-3">
            <UButton
              label="Запустить"
              icon="i-heroicons-play-solid"
              trailing
              size="sm"
              class="text-gray-900"
              @click="run"
            />
            <UButton
              label="Сбросить"
              icon="i-heroicons-arrow-path"
              trailing
              size="sm"
              variant="outline"
              @click="resetCurrent"
            />
          </div>
        </div>
        <div v-if="jsOutput" class="text-white p-4 min-h-[60px] font-mono text-sm whitespace-pre-wrap bg-[#1e1e1e]">
          <div class="mb-1 text-green-400 text-xs">Консоль:</div>
          {{ jsOutput }}
        </div>
      </div>
    </div>
    <div class="flex-1 min-w-0">
      <UiCodePreview :html="previewSrcdoc" />
    </div>
  </div>
</template>

<script setup lang="ts">
import loader from "@monaco-editor/loader";

type TabId = "html" | "css" | "js";

const tabList: { id: TabId, label: string, color: string }[] = [
  { id: "html", label: "HTML", color: "#e34c26" },
  { id: "css", label: "CSS", color: "#264de4" },
  { id: "js", label: "JS", color: "#f7df1e" },
];

const defaultCode: Record<TabId, string> = {
  html: `<div class="card">
  <h1>WebLearn</h1>
  <p>Интерактивная платформа обучения</p>
  <button onclick="increment()">Нажми меня</button>
  <div id="counter">0</div>
</div>`,
  css: `body {
  font-family: Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

h1 { margin: 0 0 8px; font-size: 28px; }
p { margin: 0 0 20px; opacity: 0.85; }

button {
  background: white;
  color: #764ba2;
  border: none;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.15s;
}

button:hover { transform: scale(1.05); }

#counter {
  margin-top: 16px;
  font-size: 40px;
  font-weight: bold;
}`,
  js: `let count = 0;

function increment() {
  count++;
  document.getElementById('counter').textContent = count;
}`,
};

const activeTab = ref<TabId>("html");
const codeStore: Record<TabId, string> = {
  html: defaultCode.html,
  css: defaultCode.css,
  js: defaultCode.js,
};
const langMap: Record<TabId, string> = {
  html: "html",
  css: "css",
  js: "javascript",
};

const editorContainer = ref<HTMLElement | null>(null);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let editor: any = null;
let ignoreNextChange = false;

const previewSrcdoc = ref("");
const jsOutput = ref("");

function switchTab(tabId: TabId) {
  if (activeTab.value === tabId) return;
  codeStore[activeTab.value] = editor?.getValue() ?? codeStore[activeTab.value];
  activeTab.value = tabId;
  if (editor) {
    ignoreNextChange = true;
    const lang = langMap[tabId];
    const model = editor.getModel();
    if (model) {
      monacoInstance.editor.setModelLanguage(model, lang);
    }
    editor.setValue(codeStore[tabId]);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let monacoInstance: any = null;

function buildPreview() {
  const html = codeStore.html;
  const css = codeStore.css;
  const js = codeStore.js;
  previewSrcdoc.value = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${css}</style>
</head>
<body>
  ${html}
  <` + `script>${js}</` + `script>
</body>
</html>`;
}

function run() {
  codeStore[activeTab.value] = editor?.getValue() ?? codeStore[activeTab.value];
  buildPreview();

  jsOutput.value = "";
  const code = codeStore.js;
  if (code.trim()) {
    try {
      const logs: string[] = [];
      const origLog = console.log;
      console.log = (...args: unknown[]) => {
        logs.push(args.map((a: unknown) => typeof a === "object" ? JSON.stringify(a) : String(a)).join(" "));
      };
      const fn = new Function(code);
      fn();
      console.log = origLog;
      if (logs.length) jsOutput.value = logs.join("\n");
    }
    catch (error: unknown) {
      jsOutput.value = "Ошибка: " + String((error as Error).message);
    }
  }
}

function resetCurrent() {
  if (editor) {
    ignoreNextChange = true;
    editor.setValue(defaultCode[activeTab.value]);
    codeStore[activeTab.value] = defaultCode[activeTab.value];
  }
  jsOutput.value = "";
}

onMounted(async () => {
  monacoInstance = await loader.init();

  editor = monacoInstance.editor.create(editorContainer.value!, {
    value: codeStore.html,
    language: "html",
    theme: "vs-dark",
    automaticLayout: true,
    minimap: { enabled: false },
    fontSize: 14,
    scrollBeyondLastLine: false,
    wordWrap: "on",
  });

  editor.onDidChangeModelContent(() => {
    if (ignoreNextChange) {
      ignoreNextChange = false;
      return;
    }
    codeStore[activeTab.value] = editor.getValue();
  });

  run();
});
</script>
