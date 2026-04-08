<script setup lang="ts">
definePageMeta({
  layout: "menu",
});

const route = useRoute();
const { getLesson, getAdjacentLessons } = useLessons();

const slugParts = computed(() => {
  const params = route.params.slug;
  if (Array.isArray(params)) return params as string[];
  return [params as string];
});

const lesson = computed(() => {
  const parts = slugParts.value;
  if (parts.length === 2 && parts[0] && parts[1]) {
    return getLesson(parts[0], parts[1]);
  }
  return null;
});

const adjacent = computed(() => {
  if (!lesson.value) return { prev: null, next: null };
  return getAdjacentLessons(lesson.value.id);
});
</script>

<template>
  <div class="space-y-4">
    <div
      v-if="lesson"
      class="bg-gray-400/80 backdrop-blur border-2 border-green-200 dark:bg-gray-800 dark:border-transparent rounded-lg overflow-hidden"
    >
      <LessonRenderer :lesson="lesson" />
    </div>

    <div
      v-if="lesson && (adjacent.prev || adjacent.next)"
      class="flex items-stretch gap-4"
    >
      <NuxtLink
        v-if="adjacent.prev"
        :to="adjacent.prev.to"
        class="group flex-1 flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 hover:border-green-400 dark:hover:border-green-500 hover:shadow-md transition-all duration-200"
      >
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/30 transition-colors">
          <UIcon name="i-heroicons-arrow-left" class="size-5 text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" />
        </div>
        <div class="min-w-0">
          <div class="text-xs text-gray-400 dark:text-gray-500 mb-0.5">Предыдущий урок</div>
          <div class="text-sm font-semibold text-gray-700 dark:text-gray-200 truncate">
            {{ adjacent.prev.title }}
          </div>
        </div>
      </NuxtLink>
      <div v-else class="flex-1" />

      <NuxtLink
        v-if="adjacent.next"
        :to="adjacent.next.to"
        class="group flex-1 flex items-center justify-end gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 hover:border-green-400 dark:hover:border-green-500 hover:shadow-md transition-all duration-200"
      >
        <div class="min-w-0 text-right">
          <div class="text-xs text-gray-400 dark:text-gray-500 mb-0.5">Следующий урок</div>
          <div class="text-sm font-semibold text-gray-700 dark:text-gray-200 truncate">
            {{ adjacent.next.title }}
          </div>
        </div>
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/30 transition-colors">
          <UIcon name="i-heroicons-arrow-right" class="size-5 text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" />
        </div>
      </NuxtLink>
      <div v-else class="flex-1" />
    </div>

    <div v-if="!lesson" class="p-12 text-center">
      <div class="text-6xl mb-4">🔍</div>
      <h2 class="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
        Урок не найден
      </h2>
      <p class="text-gray-500 dark:text-gray-400">
        Проверьте адрес или вернитесь к каталогу уроков.
      </p>
      <UButton
        to="/education"
        label="К каталогу"
        class="mt-6"
      />
    </div>
  </div>
</template>
