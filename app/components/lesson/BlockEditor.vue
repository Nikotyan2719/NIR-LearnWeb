<template>
  <div class="mb-6">
    <div v-if="block.instructions" class="mb-3 text-gray-700 dark:text-gray-300 font-medium">
      {{ block.instructions }}
    </div>
    <div v-if="block.language === 'javascript'" class="space-y-0">
      <UiCodeEditor
        ref="editorRef"
        :language="block.language"
        :initial-code="block.initialCode"
        @code-changed="onCodeChanged"
      />
    </div>
    <div v-else>
      <div class="mb-3">
        <UiCodeEditor
          ref="editorRef"
          :language="block.language"
          :initial-code="block.initialCode"
          @code-changed="onCodeChanged"
          @run-preview="applyPreview"
        />
      </div>
      <UiCodePreview
        :html="previewHtml"
        :css="previewCss"
      />
    </div>

    <div class="flex items-center gap-2 mt-3">
      <UButton
        label="Проверить ИИ"
        icon="i-heroicons-sparkles-solid"
        trailing
        size="sm"
        color="secondary"
        :loading="ai.state.loading"
        @click="requestReview"
      />
    </div>

    <LessonAIReviewPanel
      :loading="ai.state.loading"
      :review="ai.state.review"
      :error="ai.state.error"
      @close="ai.clear()"
    />
  </div>
</template>

<script setup lang="ts">
import type { EditorBlock } from "~/types/lesson";

const props = defineProps<{
  block: EditorBlock
}>();

const emit = defineEmits<{
  completed: []
}>();

const editorRef = ref<{ getValue: () => string } | null>(null);
const currentCode = ref(props.block.initialCode);

const appliedHtml = ref("");
const appliedCss = ref("");

const ai = useAIReview();

const previewHtml = computed(() => {
  if (props.block.language === "html") {
    return appliedHtml.value || props.block.previewHtml || "";
  }
  return props.block.previewHtml || "";
});

const previewCss = computed(() => {
  if (props.block.language === "css") {
    return appliedCss.value || props.block.previewCss || "";
  }
  return props.block.previewCss || "";
});

function onCodeChanged(value: string) {
  currentCode.value = value;
}

function applyPreview() {
  if (props.block.language === "html") {
    appliedHtml.value = currentCode.value;
  }
  else if (props.block.language === "css") {
    appliedCss.value = currentCode.value;
  }
  emit("completed");
}

function requestReview() {
  const code = currentCode.value;
  ai.submitReview(
    _lessonTitle,
    props.block.instructions || "",
    code,
    props.block.language,
  );
}

const _lessonTitle = inject<string>("lessonTitle", "");

onMounted(() => {
  if (props.block.language === "html") {
    appliedHtml.value = props.block.initialCode;
  }
  else if (props.block.language === "css") {
    appliedCss.value = props.block.initialCode;
  }
});
</script>
