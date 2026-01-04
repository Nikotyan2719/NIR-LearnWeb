<script setup lang="ts">
const appStore = useAppStore();
const navigation = computed(() => appStore.navigation);
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
              :items="navigation"
              :ui="{
                link: 'text-black hover:bg-green-200/20 hover:text-black dark:text-white dark:hover:bg-green-900/20 dark:hover:text-green-400 rounded-lg',
                linkLeadingIcon: 'text-inherit group-hover:text-inherit',
                childList: 'border-green-400'
              }"
              class="data-[orientation=vertical]:w-48 mt-8 rounded-lg text-white bg-gray-400 dark:bg-gray-800 backdrop-blur-xs p-4 border-2 border-green-200 dark:border-transparent w-full!"
          />
        </UPageAside>
      </template>
    </UPage>
  </UApp>
</template>
