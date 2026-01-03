<script setup lang="ts">

const cardsJs = ref([
  {
    title: "Типы данных",
    description: "Какие типы данных существуют в js",
    to: "/education/js/types",
    src: "/education/img1.png",
  },
  {
    title: "Операции",
    description: "Базовые операции, типы сравнения",
    to: "/education/js/operation",
    src: "/education/img1.png",
  },
  {
    title: "Функции",
    description: "Узнайте как создать и вызвать функцию",
    to: "/education/js/functions",
    src: "/education/img1.png",
  },
]);

const cardsCss = ref([
  {
    title: "Селекторы",
    description: "Узнайте про css-селекторы",
    to: "/education/css/selectors",
    src: "/education/img3.png",
  },
  {
    title: "Позиционирование",
    description: "Способы позиционирования элемента на странице",
    to: "/education/css/position",
    src: "/education/img3.png",
  },
  {
    title: "Flex",
    description: "Flex-модель, что это и для чего нужно",
    to: "/education/css/flex",
    src: "/education/img3.png",
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
      <USeparator :ui="{ border: 'border-gray-200 dark:border-gray-700' }"/>
      <div>
        <div class="text-lg lg:text-3xl mb-3">JavaScript:</div>
        <UPageGrid>
          <UPageCard v-for="(card, index) in cardsJs" :key="index" v-bind="card">
            <template #header>
              <img :src="card.src" :alt="card.title" class="w-full" >
            </template>
          </UPageCard>
        </UPageGrid>
      </div>
      <USeparator :ui="{ border: 'border-gray-200 dark:border-gray-700' }"/>
      <div>
        <div class="text-lg lg:text-3xl mb-3">CSS:</div>
        <UPageGrid>
          <UPageCard v-for="(card, index) in cardsCss" :key="index" v-bind="card" :ui="{ header: 'ms-auto me-10' }">
            <template #header>
              <img :src="card.src" :alt="card.title" class="w-full max-h-32" >
            </template>
          </UPageCard>
        </UPageGrid>
      </div>
    </UPageList>
  </div>
</template>

<style module>
</style>
