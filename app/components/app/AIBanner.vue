<script setup lang="ts">
const reviewLines = [
  { text: "Хорошее использование flexbox!", type: "success" },
  { text: "Добавьте meta viewport для адаптивности.", type: "warning" },
  { text: "Код чистый и читаемый. Попробуйте grid для сложных задач.", type: "success" },
];

const chatMessages = [
  { role: "user", text: "Чем отличается grid от flexbox?" },
  { role: "assistant", text: "Flexbox — одномерный (строка или столбец), Grid — двумерный (строки и столбцы одновременно). Grid лучше для сложных макетов страниц." },
];
</script>

<template>
  <div class="relative overflow-hidden rounded-2xl border-2 border-green-400/40 dark:border-green-600/30 bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-emerald-950/30 shadow-lg">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-400/10 dark:bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

    <div class="relative px-6 py-10 lg:px-12 lg:py-14">
      <div class="text-center mb-10">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-sm font-medium mb-4">
          <span class="relative flex size-2">
            <span class="animate-ping absolute inline-flex size-full rounded-full bg-green-400 opacity-75" />
            <span class="relative inline-flex rounded-full size-2 bg-green-500" />
          </span>
         Powered by AI
        </div>
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Искусственный интеллект<br>на службе вашего обучения
        </h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          Встроенный AI-ассистент поможет разобраться в материале и проверит ваш код прямо на платформе
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div class="group rounded-xl border border-green-200 dark:border-green-800/50 bg-white/80 dark:bg-gray-800/60 backdrop-blur p-6 hover:shadow-xl hover:border-green-400 dark:hover:border-green-600/60 transition-all duration-300">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
              <UIcon name="i-heroicons-chat-bubble-left-right" class="size-5 text-green-600 dark:text-green-400" />
            </div>
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">AI-ассистент</h3>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-5">
            Задавайте вопросы по теме каждого урока и получайте мгновенные развёрнутые ответы
          </p>

          <div class="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80 p-4 space-y-3">
            <div
              v-for="(msg, i) in chatMessages"
              :key="i"
              class="flex gap-2"
              :class="msg.role === 'user' ? 'justify-end' : 'justify-start'"
            >
              <div
                class="max-w-[85%] rounded-xl px-3 py-2 text-xs"
                :class="msg.role === 'user'
                  ? 'bg-green-600 text-white rounded-br-sm'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-bl-sm border border-gray-200 dark:border-gray-700'"
              >
                {{ msg.text }}
              </div>
            </div>
            <div class="flex items-center gap-2 pt-1">
              <div class="flex-1 h-7 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 flex items-center">
                <span class="text-[11px] text-gray-400">Напишите вопрос...</span>
              </div>
              <div class="w-7 h-7 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                <UIcon name="i-heroicons-paper-airplane-solid" class="size-3 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div class="group rounded-xl border border-green-200 dark:border-green-800/50 bg-white/80 dark:bg-gray-800/60 backdrop-blur p-6 hover:shadow-xl hover:border-green-400 dark:hover:border-green-600/60 transition-all duration-300">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
              <UIcon name="i-heroicons-sparkles-solid" class="size-5 text-green-600 dark:text-green-400" />
            </div>
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">AI-ревью кода</h3>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-5">
            Напишите код в практическом задании — AI проверит его и даст рекомендации
          </p>

          <div class="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80 p-4 space-y-3">
            <div class="flex items-center gap-2 mb-2">
              <UIcon name="i-heroicons-sparkles-solid" class="size-4 text-green-500" />
              <span class="text-xs font-semibold text-green-700 dark:text-green-400">Проверка ИИ</span>
            </div>
            <div
              v-for="(line, i) in reviewLines"
              :key="i"
              class="flex items-start gap-2"
            >
              <UIcon
                :name="line.type === 'success' ? 'i-heroicons-check-circle-solid' : 'i-heroicons-exclamation-triangle-solid'"
                class="size-4 mt-0.5 flex-shrink-0"
                :class="line.type === 'success' ? 'text-green-500' : 'text-yellow-500'"
              />
              <span class="text-xs text-gray-700 dark:text-gray-300">{{ line.text }}</span>
            </div>
            <div class="flex items-center gap-2 pt-2 border-t border-gray-200 dark:border-gray-700">
              <div class="h-6 px-3 rounded-md bg-green-600 flex items-center">
                <span class="text-[10px] text-white font-medium flex items-center gap-1">
                  <UIcon name="i-heroicons-sparkles-solid" class="size-3" />
                  Проверить ИИ
                </span>
              </div>
              <span class="text-[10px] text-gray-400">— кнопка в каждом задании</span>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-10">
        <UButton
          to="/education"
          size="xl"
          label="Начать обучение"
          icon="i-heroicons-arrow-right-20-solid"
          trailing
          class="cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>
