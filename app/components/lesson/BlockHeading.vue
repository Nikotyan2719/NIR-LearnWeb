<template>
  <component
    :is="`h${block.level}`"
    :class="headingClasses"
  >
    {{ block.content }}
  </component>
</template>

<script setup lang="ts">
import type { HeadingBlock } from "~/types/lesson";

const props = defineProps<{
  block: HeadingBlock
}>();

const headingClasses = computed(() => {
  const base = "font-bold text-gray-800 dark:text-white";
  switch (props.block.level) {
    case 2: return `${base} text-3xl mb-6 mt-8`;
    case 3: return `${base} text-2xl mb-4 mt-6`;
    case 4: return `${base} text-lg mb-2`;
    default: return base;
  }
});
</script>
