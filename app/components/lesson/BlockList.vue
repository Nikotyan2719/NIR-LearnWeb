<template>
  <div class="mb-8">
    <component :is="block.ordered ? 'ol' : 'ul'" :class="block.ordered ? 'list-decimal' : 'space-y-4'" class="pl-0">
      <li
        v-for="(item, index) in block.items"
        :key="index"
        class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700"
      >
        <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">{{ item.title }}</h4>
        <p class="text-gray-700 dark:text-gray-300">{{ item.description }}</p>
        <div v-if="item.code" class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
          <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">{{ item.code.code }}</pre>
        </div>
      </li>
    </component>
  </div>
</template>

<script setup lang="ts">
import type { ListBlock } from "~/types/lesson";

defineProps<{
  block: ListBlock
}>();
</script>
