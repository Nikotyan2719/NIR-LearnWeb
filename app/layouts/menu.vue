<script setup lang="ts">
const items = ref([
  [
    {
      label: "На главную",
      icon: "i-lucide-book-open",
      to: "/",
    },
    {
      label: "Обучение",
      icon: "i-lucide-database",
      to: "/education",
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
                link: 'text-inherit hover:text-black dark:hover:text-green-400',
                linkLeadingIcon: 'text-inherit group-hover:text-inherit'
              }"
              class="data-[orientation=vertical]:w-48 mt-8 rounded-lg text-white bg-gray-400 dark:bg-gray-800 backdrop-blur-xs p-4 border-2 border-green-200 dark:border-transparent w-full!" />
        </UPageAside>
      </template>
    </UPage>
  </UApp>
</template>
