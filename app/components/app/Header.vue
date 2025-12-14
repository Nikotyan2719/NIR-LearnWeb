<script setup lang="ts">
const mode = useColorMode();

watch(mode, () => {
  console.log("mode", mode);
});
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
    </template>
  </UHeader>
</template>
