<template>
  <div class="mb-6">
    <div v-if="block.label" class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
      {{ block.label }}
    </div>
    <div class="relative group bg-gray-100 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
      <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto whitespace-pre-wrap"><code>{{ block.code }}</code></pre>
      <button
        class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-xs text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
        @click="copyCode"
      >
        {{ copied ? 'Скопировано!' : 'Копировать' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CodeBlock } from "~/types/lesson";

const props = defineProps<{
  block: CodeBlock
}>();

const copied = ref(false);

async function copyCode() {
  try {
    await navigator.clipboard.writeText(props.block.code);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  }
  catch {
    copied.value = false;
  }
}
</script>
