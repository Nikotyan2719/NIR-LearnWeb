<template>
  <p class="mb-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
    <span v-html="renderedContent" />
  </p>
</template>

<script setup lang="ts">
import type { TextBlock } from "~/types/lesson";

const props = defineProps<{
  block: TextBlock
}>();

const renderedContent = computed(() => {
  return props.block.content
    .replace(/`([^`]+)`/g, "<code class=\"bg-gray-100 dark:bg-gray-700 px-1 rounded text-sm\">$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
});
</script>
