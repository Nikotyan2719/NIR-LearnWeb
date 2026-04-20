<template>
  <div v-if="loading || review || error" class="mt-4">
    <div
      class="rounded-xl border-2 p-4"
      :class="error
        ? 'border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20'
        : review
          ? 'border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20'
          : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800'"
    >
      <div class="flex items-center gap-2 mb-2">
        <UIcon
          :name="error ? 'i-heroicons-exclamation-circle' : 'i-heroicons-sparkles-solid'"
          class="size-5"
          :class="error ? 'text-red-500' : 'text-green-500'"
        />
        <span class="font-semibold text-sm" :class="error ? 'text-red-700 dark:text-red-300' : 'text-green-700 dark:text-green-300'">
          {{ error ? "Ошибка" : "Проверка ИИ" }}
        </span>
        <UButton
          icon="i-heroicons-x-mark"
          size="xs"
          variant="ghost"
          class="ml-auto"
          @click="$emit('close')"
        />
      </div>

      <div v-if="loading" class="flex items-center gap-3 py-2">
        <div class="animate-spin size-5 border-2 border-green-500 border-t-transparent rounded-full" />
        <span class="text-sm text-gray-600 dark:text-gray-300">ИИ анализирует ваш код...</span>
      </div>

      <div v-else-if="error" class="text-sm text-red-600 dark:text-red-400">
        {{ error }}
      </div>

      <div v-else class="text-sm text-gray-700 dark:text-gray-200 prose prose-sm dark:prose-invert max-w-none">
        <div v-html="renderedReview" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  loading: boolean
  review: string
  error: string
}>();

defineEmits<{
  close: []
}>();

const renderedReview = computed(() => {
  if (!props.review) return "";
  return props.review
    .replace(/```(\w*)\n([\s\S]*?)```/g, "<pre class=\"bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs overflow-x-auto my-2\"><code>$2</code></pre>")
    .replace(/`([^`]+)`/g, "<code class='bg-gray-100 dark:bg-gray-900 px-1 rounded text-xs'>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>");
});
</script>
