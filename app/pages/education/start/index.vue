<template>
  <div class="space-y-6">
    <div class="bg-gray-400 backdrop-blur border-2 border-green-200 dark:bg-gray-800  dark:border-transparent rounded-lg">
      <InformationBase />
    </div>
    <div class="mt-12 p-6 bg-gray-400 backdrop-blur border-2 border-green-200 dark:bg-gray-800  dark:border-transparent rounded-lg">
      <h2 class="text-xl font-semibold mb-4">Комментарии</h2>
      <UForm class="mb-8 space-y-4" @submit="onSubmit">
        <div class="space-y-2">
          <label class="block text-sm font-medium ">Оставьте ваш комментарий</label>
          <div class="flex flex-col items-start gap-2 relative">
            <UTextarea
                v-model="user.text"
                size="xl"
                :rows="3"
                :maxrows="6"
                autoresize
                placeholder="Напишите комментарий..."
                class="flex-1 resize-none w-full"
                :ui="{
                    trailing: 'px-2!',
                    base: 'resize-none'
                  }"/>
            <UButton type="submit" class="mt-auto" color="primary" label="Отправить" trailing size="xl" :disabled="!user.text.trim()" icon="i-heroicons-paper-airplane"/>
          </div>
        </div>
      </UForm>
      <div v-if="comments.length" class="space-y-6">
        <div v-for="comment in comments" :key="comment.id" class="p-4 border rounded-lg">
          <div class="flex items-start gap-3">
            <UAvatar :src="comment.avatar" :alt="comment.author" size="xl"/>
            <div class="flex-1">
              <div class="flex items-center gap-2">
                <span class="font-medium text-lg">{{ comment.author }}</span>
                <span class="text-xs text-gray-500">
                    {{ formatDate(comment.date) }}
                  </span>
              </div>
              <p class="mt-1 text-gray-800 dark:text-white break-all">{{ comment.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-center py-8 text-gray-500">
        Пока нет комментариев. Будьте первым!
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const appStore = useAppStore();
const comments = computed(() => appStore.comments);
const user = reactive({
  text: "",
  author: "Анонимный пользователь",
  avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
});

const onSubmit = () => {
  if (!user.text.trim()) return;
  appStore.addComment({
    text: user.text,
    author: user.author,
    avatar: user.avatar,
  });

  user.text = "";
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

definePageMeta({
  layout: "menu",
});
</script>

<style scoped>

</style>
