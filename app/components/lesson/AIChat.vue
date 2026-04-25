<script setup lang="ts">
const props = defineProps<{
  lessonTitle: string
  lessonDescription: string
}>();

const chat = useAIChat();
const inputText = ref("");
const chatContainer = ref<HTMLElement | null>(null);
const isOpen = ref(false);

watch(isOpen, (val) => {
  if (val) nextTick(() => scrollToBottom());
});

function renderMarkdown(text: string): string {
  return text
    .replace(/```(\w*)\n([\s\S]*?)```/g, "<pre class=\"bg-gray-100 dark:bg-gray-900 p-3 rounded-lg text-xs overflow-x-auto my-2 border border-gray-200 dark:border-gray-700\"><code>$2</code></pre>")
    .replace(/`([^`]+)`/g, "<code class='bg-gray-100 dark:bg-gray-900 px-1.5 py-0.5 rounded text-xs'>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>");
}

async function handleSend() {
  if (!inputText.value.trim() || chat.loading.value) return;
  const text = inputText.value;
  inputText.value = "";
  await chat.sendMessage(text, props.lessonTitle, props.lessonDescription);
  nextTick(() => scrollToBottom());
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleSend();
  }
}

function scrollToBottom() {
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
}

function startNewChat() {
  chat.clear();
}

watch(() => chat.messages.value.length, () => {
  nextTick(() => scrollToBottom());
});
</script>

<template>
  <UCollapsible v-model:open="isOpen" class="mt-8 rounded-xl border-2 border-green-200 dark:border-green-900/50 bg-white dark:bg-gray-900 overflow-hidden">
    <UButton
      class="group w-full rounded-none"
      variant="ghost"
      trailing-icon="i-heroicons-chevron-down"
      :ui="{
        trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200',
        base: 'rounded-none'
      }"
      block
    >
      <div class="flex items-center gap-3 w-full text-left py-3">
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <UIcon name="i-heroicons-chat-bubble-left-right" class="size-5 text-green-600 dark:text-green-400" />
        </div>
        <div class="flex-1 text-left">
          <h3 class="text-base font-semibold text-gray-800 dark:text-white">
            Остались вопросы?
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Задайте вопрос по теме урока нашему AI-ассистенту
          </p>
        </div>
      </div>
    </UButton>

    <template #content>
      <div class="border-t border-green-200 dark:border-green-900/50">
        <div
          ref="chatContainer"
          class="max-h-96 overflow-y-auto p-4 space-y-4"
        >
          <div
            v-if="chat.messages.value.length === 0"
            class="text-center py-8"
          >
            <UIcon name="i-heroicons-sparkles-solid" class="size-8 text-green-400 mx-auto mb-3" />
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Задайте вопрос по теме <span class="font-medium text-gray-700 dark:text-gray-300">«{{ lessonTitle }}»</span>
            </p>
          </div>

          <div
            v-for="(msg, i) in chat.messages.value"
            :key="i"
            class="flex gap-3"
            :class="msg.role === 'user' ? 'justify-end' : 'justify-start'"
          >
            <div
              v-if="msg.role === 'assistant'"
              class="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-1"
            >
              <UIcon name="i-heroicons-sparkles-solid" class="size-4 text-green-600 dark:text-green-400" />
            </div>
            <div
              class="max-w-[80%] rounded-2xl px-4 py-3 text-sm"
              :class="msg.role === 'user'
                ? 'bg-green-600 text-white rounded-br-sm'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-bl-sm'"
            >
              <div v-if="msg.role === 'assistant'" v-html="renderMarkdown(msg.content)" />
              <template v-else>{{ msg.content }}</template>
            </div>
            <div
              v-if="msg.role === 'user'"
              class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-1"
            >
              <UIcon name="i-heroicons-user-solid" class="size-4 text-blue-600 dark:text-blue-400" />
            </div>
          </div>

          <div v-if="chat.loading.value" class="flex gap-3 justify-start">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-1">
              <UIcon name="i-heroicons-sparkles-solid" class="size-4 text-green-600 dark:text-green-400" />
            </div>
            <div class="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-bl-sm px-4 py-3">
              <div class="flex items-center gap-2">
                <div class="flex gap-1">
                  <span class="animate-bounce size-2 bg-green-500 rounded-full" style="animation-delay: 0ms" />
                  <span class="animate-bounce size-2 bg-green-500 rounded-full" style="animation-delay: 150ms" />
                  <span class="animate-bounce size-2 bg-green-500 rounded-full" style="animation-delay: 300ms" />
                </div>
                <span class="text-xs text-gray-500 dark:text-gray-400">AI думает...</span>
              </div>
            </div>
          </div>

          <div v-if="chat.error.value" class="text-center py-2">
            <span class="text-sm text-red-500">{{ chat.error.value }}</span>
          </div>
        </div>

        <div class="border-t border-gray-100 dark:border-gray-800 p-3">
          <div class="flex items-center gap-2">
            <UTextarea
              v-model="inputText"
              :rows="1"
              autoresize
              :maxrows="4"
              placeholder="Напишите вопрос..."
              class="flex-1"
              :disabled="chat.loading.value"
              @keydown="handleKeydown"
            />
            <div class="flex flex-col gap-1">
              <UButton
                icon="i-heroicons-paper-airplane-solid"
                size="sm"
                color="primary"
                :loading="chat.loading.value"
                :disabled="!inputText.trim() || chat.loading.value"
                @click="handleSend"
              />
              <UButton
                v-if="chat.messages.value.length > 0"
                icon="i-heroicons-arrow-path"
                size="sm"
                variant="ghost"
                :disabled="chat.loading.value"
                @click="startNewChat"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
  </UCollapsible>
</template>
