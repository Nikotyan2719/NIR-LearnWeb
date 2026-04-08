<template>
  <div class="border-2 border-gray-700 dark:border-gray-600 rounded-lg overflow-hidden relative">
    <div class="relative">
      <div ref="containerRef" class="h-[300px] w-full" />
      <div class="flex gap-2 absolute bottom-0 right-0 m-3">
        <UButton
          v-if="language === 'javascript'"
          label="Запустить"
          icon="i-heroicons-play-solid"
          trailing
          size="sm"
          class="text-gray-900"
          @click="run"
        />
        <UButton
          v-if="language !== 'javascript'"
          label="Запустить"
          icon="i-heroicons-play-solid"
          trailing
          size="sm"
          class="text-gray-900"
          @click="emit('runPreview')"
        />
        <UButton
          label="Сбросить"
          icon="i-heroicons-arrow-path"
          trailing
          size="sm"
          variant="outline"
          @click="reset"
        />
        <UButton
          label="Очистить"
          icon="pajamas:clear"
          trailing
          size="sm"
          color="secondary"
          variant="outline"
          @click="clear"
        />
      </div>
    </div>
    <div v-if="language === 'javascript'" class="text-white p-4 m-0 min-h-[80px] font-mono whitespace-pre-wrap bg-[#1e1e1e">
      <div v-if="output" class="mb-2 text-green-400">Результат:</div>
      <pre>{{ output }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import loader from "@monaco-editor/loader";

interface Editor {
  getValue(): string
  setValue(value: string): void
  onDidChangeModelContent(callback: () => void): void
}

const props = withDefaults(defineProps<{
  language?: string
  initialCode?: string
}>(), {
  language: "javascript",
  initialCode: "console.log(\"Привет мир!\");",
});

const emit = defineEmits<{
  codeChanged: [value: string]
  runPreview: []
}>();

const containerRef = ref<HTMLElement | null>(null);
const output = ref("");
let editor: Editor | null = null;

onMounted(async () => {
  const monaco = await loader.init();

  const instance = monaco.editor.create(containerRef.value!, {
    value: props.initialCode,
    language: props.language,
    theme: "vs-dark",
    automaticLayout: true,
    minimap: { enabled: false },
    fontSize: 14,
    scrollBeyondLastLine: false,
    wordWrap: "on",
  });

  editor = instance;
  instance.onDidChangeModelContent(() => {
    emit("codeChanged", instance.getValue());
  });
});

function run() {
  output.value = "";
  try {
    const code = editor!.getValue();
    if (!code.trim()) return;
    const logs: string[] = [];
    const origLog = console.log;

    console.log = (...args: unknown[]) => {
      logs.push(args.map((a: unknown) => typeof a === "object" ? JSON.stringify(a) : String(a)).join(" "));
    };
    const fn = new Function(code);
    fn();
    console.log = origLog;
    output.value = logs.join("\n");
  }
  catch (error: unknown) {
    output.value = "Ошибка: " + String((error as Error).message);
  }
}

function reset() {
  if (editor) {
    editor.setValue(props.initialCode);
    output.value = "";
  }
}

function clear() {
  if (editor) {
    editor.setValue("");
    output.value = "";
  }
}

function getValue() {
  return editor?.getValue() ?? "";
}

defineExpose({ getValue, reset });
</script>
