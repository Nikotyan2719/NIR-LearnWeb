<script setup lang="ts">
const open = ref(false);

const features = ref([
  {
    title: "Изучай",
    description: "Читай наши уроки и пополняй свои знания, даже если ты уже бывалый разработчик",
    icon: "streamline:quality-education-solid",
  },
  {
    title: "Тренируйся",
    description: "Пробуй написать код по изученной теме, используя нашу уникальную песочницу",
    icon: "ic:outline-terminal",
  },
  {
    title: "Общайся",
    description: "Обсуждай свои решения с другими новичками, получай советы и поиогай сам",
    icon: "material-symbols:android-messages",

  },
]);
</script>

<template>
  <div>
    <AppHero class="mb-10"/>
    <div class="container mx-auto">
      <UPageSection
          id="DETAIL"
          class="bg-gray-200 border-2 border-green-400 dark:border-transparent  dark:bg-gray-800 backdrop-blur rounded-lg"
          title="Прогрессивный подход к твоему обучению"
          description="Предлагем возможность изучать наши уроки и сразу применять их на практике при помощи нашей песочницы"
          :features="features"
      />
      <div class="container mx-auto mt-(--ui-header-height)">
        <UPageSection
            id="DETAIL"
            class="bg-gray-200 border-2 border-green-400 dark:border-transparent  dark:bg-gray-800 backdrop-blur rounded-lg"
            title="Попробуй написать свой код!"
            description="Используй наш уникальный редактор"
            :ui="{ container: 'py-12!' }"
        >
          <UiCodeEditor />
        </UPageSection>
      </div>
    </div>
  </div>
</template>

<style module>

</style>
