<script setup lang="ts">
const isHovered = ref(false);
</script>

<template>
  <UPageHero :ui="{ container: 'py-24 sm:pb-32 sm:pt-36 lg:py-60 lg:pt-66 xl:h-screen' }">
    <img
      src="/main/img1.jpg"
      alt="App screenshot"
      class="absolute inset-0 object-cover w-full h-full -z-1 rounded-3xl"
    >
    <template #header>
      <div class="flex flex-col gap-4 p-4 rounded-3xl border-b-cyan-400  bg-gray-700/50 dark:bg-green-400/50 text-white backdrop-blur-xs">
        <div class="text-4xl">Новая обучающая платформа</div>
        <div class="text-lg">Предлагаем вам пройти курс обучения, в котором вы изучите новую теорию и сможете применить её на практике</div>
        <UIcon
          :name="isHovered ? 'dinkie-icons:winking-face' : 'dinkie-icons:smiling-face-with-open-mouth'"
          class="size-12  mx-auto cursor-help"
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false"
        />
      </div>
    </template>
    <template #footer>
      <div class="flex gap-4 justify-center">
        <UButton to="#DETAIL" label="Узнать подробнее" size="xl" icon="i-heroicons-information-circle" trailing class="dark:bg-gray-700 dark:text-white cursor-pointer" />
        <UButton to="/education" label="Начать обучение" size="xl" icon="i-heroicons-play" trailing class="dark:bg-gray-700 dark:text-white cursor-pointer" />
      </div>
    </template>
  </UPageHero>
</template>
