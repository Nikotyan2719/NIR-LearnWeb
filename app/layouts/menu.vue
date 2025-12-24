<script setup lang="ts">
const route = useRoute();
const items = computed(() => [
  [
    {
      label: "Основы HTML, JS и CSS",
      to: "/education/start",
      class: route.path.includes("/education/start") && "text-black bg-green-200/20 dark:bg-green-900/20 dark:text-green-400",
    },
    {
      label: "Типы данных",
      to: "/js/types",
      class: route.path.includes("/js/types") && "text-black bg-green-200/20 dark:bg-green-900/20 dark:text-green-400",
    },
    {
      label: "Операции",
      to: "/js/operation",
      class: route.path.includes("/js/operation") && "text-black bg-green-200/20 dark:bg-green-900/20 dark:text-green-400",
    },
    {
      label: "Функции",
      to: "/js/functions",
      class: route.path.includes("/js/functions") && "text-black bg-green-200/20 dark:bg-green-900/20 dark:text-green-400",
    },
  ],
]);
</script>

<template>
  <UApp>
    <AppHeader />
    <UPage class="container mx-auto mt-(--ui-header-height)">
      <UPageBody>
        <slot />
      </UPageBody>
      <template #right>
        <UPageAside class="p-0! overflow-hidden!">
          <UNavigationMenu
              orientation="vertical"
              :items="items"
              :ui="{
                link: 'text-black hover:bg-green-200/20 hover:text-black dark:text-white dark:hover:bg-green-900/20 dark:hover:text-green-400 rounded-lg',
                linkLeadingIcon: 'text-inherit group-hover:text-inherit'
              }"
              class="data-[orientation=vertical]:w-48 mt-8 rounded-lg text-white bg-gray-400 dark:bg-gray-800 backdrop-blur-xs p-4 border-2 border-green-200 dark:border-transparent w-full!" />
        </UPageAside>
      </template>
    </UPage>
  </UApp>
</template>
