<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Links",
      type: "label",
    },
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
  <NuxtLayout name="menu">
    <div>
      Основной контент
    </div>

    <template #aside>
      <UNavigationMenu orientation="vertical" :items="items" class="data-[orientation=vertical]:w-48" />
    </template>
  </NuxtLayout>
</template>

<style module>
</style>
