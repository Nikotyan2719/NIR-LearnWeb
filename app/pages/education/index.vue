<script setup lang="ts">

const cards = ref([
  {
    title: "Типы данных",
    description: "Какие типы данных существуют в js",
    to: "/js/types",
    src: "/education/img1.png",
  },
  {
    title: "Операции",
    description: "Базовые операции, типы сравнения",
    to: "/js/operation",
    src: "/education/img1.png",
  },
  {
    title: "Функции",
    description: "Узнайте как создать и вызвать функцию",
    to: "/js/functions",
    src: "/education/img1.png",
  },
]);

definePageMeta({
  layout: "menu",
});
</script>

<template>
  <div class="bg-gray-400 backdrop-blur border-2 border-green-200 dark:bg-gray-800  dark:border-transparent rounded-lg p-5">
    <UPageList class="flex flex-col gap-6">
      <div>
        <div class="text-lg lg:text-3xl mb-3">Основы:</div>
        <UPageCard
            title="Основы HTML, JS и CSS"
            description="Перед началом углубденного обучения ознакомьтесь с основами HTML, JS и CSS"
            reverse
            to="/education/start"
            orientation="horizontal"
        >
          <img src="/education/img2.png" alt="image" class="w-full" >
        </UPageCard>
      </div>
      <USeparator />
      <div>
        <div class="text-lg lg:text-3xl mb-3">JavaScript:</div>
        <UPageGrid>
          <UPageCard v-for="(card, index) in cards" :key="index" v-bind="card">
            <template #header>
              <img :src="card.src" :alt="card.title" class="w-full" >
            </template>
          </UPageCard>
        </UPageGrid>
      </div>
    </UPageList>
  </div>
</template>

<style module>
</style>
