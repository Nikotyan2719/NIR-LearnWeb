<script setup>
const route = useRoute();
const id = computed(() => route.params.id);
definePageMeta({
  layout: "menu",
});
</script>

<template>
  <div class="container">
    <p>ID: {{ id }}</p>
  </div>
</template>
