<template>
  <UApp>
    <AppHeader />
    <UPage class="container mx-auto">
      <UPageBody class="mt-(--ui-header-height)">
        <slot />
      </UPageBody>
      <template #right>
        <UPageAside class="mt-(--ui-header-height)">
          <slot name="aside" />
        </UPageAside>
      </template>
    </UPage>
  </UApp>
</template>
<script setup lang="ts">
</script>
