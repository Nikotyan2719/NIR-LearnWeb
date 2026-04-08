import type { Comment } from "~/types";

export const useAppStore = defineStore("app", () => {
  const data = ref({
    comments: [
      {
        id: "1",
        author: "Иван Иванов",
        text: "Отличный материал, спасибо за объяснение!",
        date: "2025-12-19T14:30:00",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        id: "2",
        author: "Анна Петрова",
        text: "А можно пример кода для этого раздела?",
        date: "2025-12-19T15:45:00",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      },
    ] as Comment[],
  });

  const navigation = computed(() => {
    const { getNavigation } = useLessons();
    return getNavigation();
  });

  const comments = computed<Comment[]>(() =>
    [...data.value.comments].reverse(),
  );

  const addComment = (comment: Omit<Comment, "id" | "date">) => {
    const newComment: Comment = {
      ...comment,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };
    data.value.comments.push(newComment);
    return newComment;
  };

  return {
    comments,
    navigation,
    addComment,
  };
});
