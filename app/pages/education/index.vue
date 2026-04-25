<script setup lang="ts">
definePageMeta({
  layout: "menu",
});

const { getAllTopics, getTopicLessons } = useLessons();
const { getTopicProgress, isCompleted } = useProgress();

const topicIcons: Record<string, string> = {
  basics: "i-lucide-book-open",
  html: "i-lucide-file-code",
  js: "i-lucide-code",
  css: "i-lucide-palette",
};

const topicColors: Record<string, string> = {
  basics: "from-blue-500 to-cyan-400",
  html: "from-orange-500 to-amber-400",
  js: "from-yellow-400 to-yellow-300",
  css: "from-purple-500 to-pink-400",
};

const topicIconsBg: Record<string, string> = {
  basics: "bg-blue-500",
  html: "bg-orange-500",
  js: "bg-yellow-500",
  css: "bg-purple-500",
};

const topics = computed(() =>
  getAllTopics()
    .filter((t) => t.lessons.length > 0)
    .map((topic) => {
      const lessons = getTopicLessons(topic.id);
      const lessonIds = lessons.map((l) => l.id);
      const progress = getTopicProgress(lessonIds);
      return {
        ...topic,
        lessons: lessons.map((l, idx) => ({
          ...l,
          completed: isCompleted(l.id),
          number: idx + 1,
        })),
        progress,
        icon: topicIcons[topic.id] ?? "i-lucide-book-open",
        color: topicColors[topic.id] ?? "from-green-500 to-emerald-400",
        iconBg: topicIconsBg[topic.id] ?? "bg-green-500",
      };
    }),
);
</script>

<template>
  <div
    class="bg-gray-400/80 backdrop-blur border-2 border-green-200 dark:bg-gray-800 dark:border-transparent rounded-lg p-5"
  >
    <div class="flex flex-col gap-10">
      <div v-for="topic in topics" :key="topic.id">
        <div class="flex items-center gap-3 mb-4">
          <div :class="`bg-gradient-to-br ${topic.color} rounded-xl p-2.5 shadow-md leading-none`">
            <UIcon :name="topic.icon" class="size-6 text-white" />
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-2">
              <h2 class="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white">
                {{ topic.title }}
              </h2>
              <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-200/80 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                {{ topic.progress.completed }}/{{ topic.progress.total }}
              </span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
              <div
                class="h-1.5 rounded-full transition-all duration-500"
                :class="`bg-gradient-to-r ${topic.color}`"
                :style="{ width: `${topic.progress.total > 0 ? (topic.progress.completed / topic.progress.total) * 100 : 0}%` }"
              />
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          <NuxtLink
            v-for="lesson in topic.lessons"
            :key="lesson.id"
            :to="`/education/${topic.id}/${lesson.slug}`"
            class="group relative flex items-start gap-3 rounded-xl border bg-white dark:bg-gray-900 p-3.5 hover:shadow-md transition-all duration-200"
            :class="lesson.completed
              ? 'border-green-400 dark:border-green-600 bg-green-50/50 dark:bg-green-900/10'
              : 'border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-500'"
          >
            <div
              class="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold transition-colors"
              :class="lesson.completed
                ? `bg-gradient-to-br ${topic.color} text-white`
                : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-gray-700'"
            >
              <UIcon v-if="lesson.completed" name="i-heroicons-check-solid" class="size-4" />
              <span v-else>{{ lesson.number }}</span>
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="font-semibold text-sm text-gray-800 dark:text-white leading-snug">
                {{ lesson.title }}
              </h3>
              <p v-if="lesson.description" class="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                {{ lesson.description }}
              </p>
            </div>
          </NuxtLink>
        </div>

        <USeparator class="mt-8" :ui="{ border: 'border-gray-200 dark:border-gray-700' }" />
      </div>
    </div>
  </div>
</template>
