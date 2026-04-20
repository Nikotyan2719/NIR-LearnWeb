<script setup lang="ts">
const features = ref([
  {
    title: "Изучай",
    description:
      "Читай наши уроки и пополняй свои знания. Более 25 уроков по HTML, CSS и JavaScript.",
    icon: "streamline:quality-education-solid",
  },
  {
    title: "Тренируйся",
    description:
      "Пробуй написать код прямо в уроке с помощью встроенного редактора с поддержкой HTML, CSS и JavaScript.",
    icon: "ic:outline-terminal",
  },
  {
    title: "Общайся",
    description:
      "Обсуждай свои решения с другими учениками, получай советы и помогай другим.",
    icon: "material-symbols:android-messages",
  },
]);
</script>

<template>
  <div>
    <AppHero class="mb-10" />
    <div class="container mx-auto space-y-10 pb-16">
      <UPageSection
        id="DETAIL"
        class="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border-2 border-green-400/50 dark:border-green-800/50 backdrop-blur rounded-2xl shadow-lg"
        title="Прогрессивный подход к твоему обучению"
        description="Предлагаем возможность изучать наши уроки и сразу применять их на практике при помощи интерактивного редактора кода"
        :features="features"
      />

      <div
        id="EDITOR"
        class="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border-2 border-green-400/50 dark:border-green-800/50 backdrop-blur rounded-2xl shadow-lg p-6 lg:p-8"
      >
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Попробуй написать свой код!
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          Редактируй HTML, CSS и JavaScript на отдельных вкладках — нажми «Запустить» чтобы увидеть результат
        </p>
        <UiMultiTabEditor />
      </div>
    </div>
  </div>
</template>
