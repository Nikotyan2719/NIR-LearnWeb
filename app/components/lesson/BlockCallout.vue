<template>
  <div :class="containerClasses" class="p-6 rounded-xl mb-8 border-l-4">
    <h3 :class="titleClasses" class="text-2xl font-semibold mb-4">
      {{ block.title }}
    </h3>
    <p class="whitespace-pre-line">{{ block.content }}</p>
  </div>
</template>

<script setup lang="ts">
import type { CalloutBlock } from "~/types/lesson";

const props = defineProps<{
  block: CalloutBlock
}>();

const variantMap: Record<string, { container: string, title: string }> = {
  info: {
    container: "bg-blue-50 dark:bg-blue-900/20 border-blue-500",
    title: "text-blue-800 dark:text-blue-300",
  },
  tip: {
    container: "bg-green-50 dark:bg-green-900/20 border-green-500",
    title: "text-green-800 dark:text-green-300",
  },
  warning: {
    container: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500",
    title: "text-yellow-800 dark:text-yellow-300",
  },
  advanced: {
    container: "bg-purple-50 dark:bg-purple-900/20 border-purple-500",
    title: "text-purple-800 dark:text-purple-300",
  },
  danger: {
    container: "bg-red-50 dark:bg-red-900/20 border-red-500",
    title: "text-red-800 dark:text-red-300",
  },
};

const fallback = { container: "bg-blue-50 dark:bg-blue-900/20 border-blue-500", title: "text-blue-800 dark:text-blue-300" };

const containerClasses = computed(() => variantMap[props.block.variant]?.container ?? fallback.container);
const titleClasses = computed(() => variantMap[props.block.variant]?.title ?? fallback.title);
</script>
