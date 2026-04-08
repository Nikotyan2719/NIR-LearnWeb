<template>
  <div class="border-2 border-gray-700 dark:border-gray-600 rounded-lg overflow-hidden">
    <div class="bg-gray-700 dark:bg-gray-600 px-3 py-1.5 text-xs text-gray-300 flex items-center gap-1.5">
      <UIcon name="i-heroicons-eye" class="size-3.5" />
      Предпросмотр
    </div>
    <iframe
      ref="iframeEl"
      sandbox="allow-scripts"
      class="w-full h-[300px] bg-white"
      :srcdoc="srcdoc"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  html: string
  css?: string
}>();

const iframeEl = ref<HTMLIFrameElement | null>(null);

const srcdoc = computed(() => {
  const style = props.css ? `<style>${props.css}</style>` : "";
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${style}
</head>
<body>
  ${props.html}
</body>
</html>`;
});
</script>
