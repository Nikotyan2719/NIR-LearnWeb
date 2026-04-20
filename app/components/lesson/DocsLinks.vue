<template>
  <div v-if="links.length" class="mb-6 mt-2">
    <div class="rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/20 p-4">
      <div class="flex items-center gap-2 mb-3">
        <UIcon name="i-heroicons-book-open" class="size-5 text-blue-500" />
        <h3 class="font-semibold text-sm text-blue-700 dark:text-blue-300">
          Полезные ссылки
        </h3>
      </div>
      <div class="flex flex-col gap-2">
        <a
          v-for="link in links"
          :key="link.url"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-start gap-2 group rounded-lg px-3 py-2 -mx-1 hover:bg-blue-100/60 dark:hover:bg-blue-800/30 transition-colors"
        >
          <UIcon name="i-heroicons-arrow-top-right-on-square" class="size-4 mt-0.5 text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 flex-shrink-0" />
          <div>
            <span class="text-sm font-medium text-blue-600 dark:text-blue-300 group-hover:underline">
              {{ link.title }}
            </span>
            <p v-if="link.description" class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              {{ link.description }}
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DocsLink } from "~/types/lesson";

defineProps<{
  links: DocsLink[]
}>();
</script>
