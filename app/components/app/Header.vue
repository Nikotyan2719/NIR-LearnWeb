<script setup lang="ts">
const mode = useColorMode();
const route = useRoute();

const items = computed(() => [
  [
    {
      label: "На главную",
      icon: "i-lucide-book-open",
      to: "/",
      active: route.path === "/",
    },
    {
      label: "Обучение",
      icon: "i-lucide-database",
      to: "/education",
      active: route.path.includes("/education"),
    },
  ],
]);
</script>

<template>
  <UHeader
      :toggle="false"
      class="fixed w-full"
      :ui="{ left: 'flex-0!', center: 'flex-1!' }"
  >
    <template #title>
      <div class="flex gap-3">
        <ClientOnly>
          <UIcon name="carbon:education" class="size-10 text-gray-700 dark:text-green-400"/>
        </ClientOnly>
        <div class="text-2xl font-bold hidden lg:block text-gray-700 dark:text-green-400">WebLearn</div>
      </div>
    </template>
    <UNavigationMenu :items="items" :ui="{ item: 'py-0' }"/>
    <template #right>
      <UColorModeButton size="xl" class="text-gray-700 dark:text-green-400" />
      <UDropdownMenu :items="items" class="lg:hidden">
        <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
      </UDropdownMenu>
    </template>
  </UHeader>
</template>
