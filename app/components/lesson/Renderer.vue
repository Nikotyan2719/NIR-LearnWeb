<template>
  <div class="p-6">
    <div class="flex items-center gap-3 mb-6">
      <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
        {{ lesson.title }}
      </h1>
      <UIcon v-if="lessonCompleted" name="i-heroicons-check-circle-solid" class="size-6 text-green-500"/>
    </div>
    <div v-for="(block, index) in lesson.blocks" :key="index">
      <LessonBlockText v-if="block.type === 'text'" :block="block" />
      <LessonBlockHeading v-else-if="block.type === 'heading'" :block="block" />
      <LessonBlockCallout v-else-if="block.type === 'callout'" :block="block" />
      <LessonBlockCode v-else-if="block.type === 'code'" :block="block" />
      <LessonBlockEditor
        v-else-if="block.type === 'editor'"
        :block="block"
        @completed="onEditorActivity"
      />
      <LessonBlockList v-else-if="block.type === 'list'" :block="block" />
    </div>
    <LessonDocsLinks v-if="lesson.docsLinks" :links="lesson.docsLinks" />
    <LessonAIChat :lesson-title="lesson.title" :lesson-description="lesson.description"/>
    <AppComment />
    <div ref="bottomSentinel" class="h-px" />
  </div>
</template>

<script setup lang="ts">
import type { Lesson } from "~/types/lesson";

const props = defineProps<{
  lesson: Lesson
}>();

const emit = defineEmits<{
  scrolledToBottom: []
}>();

const progress = useProgress();
const bottomSentinel = ref<HTMLElement | null>(null);

provide("lessonTitle", props.lesson.title);

const isCompletedFn = progress.isCompleted;
const markCompletedFn = progress.markCompleted;

const lessonCompleted = computed(() => isCompletedFn(props.lesson.id));

function onEditorActivity() {
  markCompletedFn(props.lesson.id);
}

onMounted(() => {
  if (!bottomSentinel.value) return;
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        markCompletedFn(props.lesson.id);
        emit("scrolledToBottom");
      }
    },
    { rootMargin: "0px 0px -50px 0px" },
  );
  observer.observe(bottomSentinel.value);
  onUnmounted(() => observer.disconnect());
});
</script>
