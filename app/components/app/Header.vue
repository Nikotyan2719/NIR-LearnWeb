<script setup lang="ts">
const mode = useColorMode();

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
  <UHeader :toggle="false" class="fixed w-full">
    <template #title>
      <div class="flex gap-3 items-end">
        <ClientOnly>
          <UIcon
            name="carbon:education"
            class="size-10 text-gray-700 dark:text-green-400"
          />
        </ClientOnly>
        <div class="text-2xl font-bold hidden lg:block text-gray-700 dark:text-green-400">WebLearn</div>
      </div>
    </template>
    <template #right>
      <UColorModeButton size="xl" class="text-gray-700 dark:text-green-400" />
      <UDropdownMenu :items="items" class="lg:hidden">
        <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
      </UDropdownMenu>
    </template>
  </UHeader>
</template>
