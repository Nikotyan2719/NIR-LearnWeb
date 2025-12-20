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
          <UNavigationMenu orientation="vertical" :items="items" class="data-[orientation=vertical]:w-48 mt-8" />
        </UPageAside>
      </template>
    </UPage>
  </UApp>
</template>
