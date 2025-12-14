<template>
  <div class="border-2 border-gray-700 rounded-lg overflow-hidden relative">
    <div class="relative">
      <div ref="container" class="h-[300px] w-full border-b border-b-gray-700" />
      <div class="flex gap-4 absolute bottom-0 right-0 m-4">
        <UButton label="Запустить" class="text-gray-900" icon="i-heroicons-play-solid" trailing @click="run" />
        <UButton label="Очистить" class="" icon="pajamas:clear" trailing color="secondary" variant="outline" @click="clear" />
      </div>
    </div>
    <div class="text-white p-4 m-0 min-h-[100px] font-mono whitespace-pre-wrap bg-[#1e1e1e]">
      <div v-if="output" class="mb-4">Результат:</div>
      <pre>{{ output }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Monaco } from "@monaco-editor/loader";
import loader from "@monaco-editor/loader";


const container = ref();
const output = ref("");
let editor: Monaco["editor"]["IStandaloneCodeEditor"] | null = null;

onMounted(async () => {
  const monaco = await loader.init();

  editor = monaco.editor.create(container.value, {
    value: "console.log(\"Привет мир!\");",
    language: "javascript",
    theme: "vs-dark",
    automaticLayout: true,
    minimap: { enabled: false },
    fontSize: 14,
  });
});

const run = () => {
  output.value = "";
  try {
    const code = editor.getValue();
    if (!code.trim()) return;
    const old = console.log;
    console.log = (...args) => output.value += args.join(" ") + "\n";
    eval(code);
    console.log = old;
  }
  catch (error: any) {
    output.value = "Ошибка: " + error.message;
  }
};

const clear = () => {
  editor.setValue("");
  output.value = "";
};
</script>

<style scoped>

</style>
