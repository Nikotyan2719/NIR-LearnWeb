<script setup lang="ts">
definePageMeta({
  layout: "menu",
});
</script>

<template>
  <div class="space-y-6">
    <div class="bg-gray-400 backdrop-blur border-2 border-green-200 dark:bg-gray-800 dark:border-transparent rounded-lg">
      <InformationForms />
    </div>
    <AppComment />
  </div>
</template>
