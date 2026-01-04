import type { Comment } from "~/types";

export const useAppStore = defineStore("app", () => {
  const route = useRoute();
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

  const navigation = computed(() => [
    {
      label: "Основы HTML, JS и CSS",
      to: "/education/start",
      class: route.path.includes("/education/start") && "text-black bg-green-200/20 dark:bg-green-900/20 dark:text-green-400",
    },
    {
      label: "HTML",
      children: [
        {
          label: "Основы HTML",
          to: "/education/html/basics",
          class: route.path.includes("/html/basics") && "text-black bg-green-200/20 dark:bg-green-900/20 dark:text-green-400",
        },
        {
          label: "Формы",
          to: "/education/html/forms",
          class: route.path.includes("/html/forms") && "text-black bg-green-200/20 dark:bg-green-900/20 dark:text-green-400",
        },
        {
          label: "Семантика",
          to: "/education/html/semantic",
          class: route.path.includes("/html/semantic") && "text-black bg-green-200/20 dark:bg-green-900/20 dark:text-green-400",
        },
      ],
    },
    {
      label: "JavaScript",
      children: [
        {
          label: "Типы данных",
          to: "/education/js/types",
          class: route.path.includes("/js/types") && "text-black bg-green-200/20 dark:bg-green-900/20 dark:text-green-400",
        },
        {
          label: "Операции",
          to: "/education/js/operation",
          class: route.path.includes("/js/operation") && "text-black bg-green-200/20 dark:bg-green-900/20 dark:text-green-400",
        },
        {
          label: "Функции",
          to: "/education/js/functions",
          class: route.path.includes("/js/functions") && "text-black bg-green-200/20 dark:bg-green-900/20 dark:text-green-400",
        },
      ],
    },
    {
      label: "CSS",
      children: [
        {
          label: "Селекторы",
          to: "/education/css/selectors",
          class: route.path.includes("/css/selectors") && "text-black bg-green-200/20 dark:bg-green-900/20 dark:text-green-400",
        },
        {
          label: "Позиционирование",
          to: "/education/css/position",
          class: route.path.includes("/css/position") && "text-black bg-green-200/20 dark:bg-green-900/20 dark:text-green-400",
        },
        {
          label: "Flex",
          to: "/education/css/flex",
          class: route.path.includes("/css/flex") && "text-black bg-green-200/20 dark:bg-green-900/20 dark:text-green-400",
        },
      ],
    },
  ]);

  const comments = computed<Comment[]>(() => data.value.comments.reverse());

  const addComment = (comment: Omit<Comment, "id" | "date">) => {
    const newComment: Comment = {
      ...comment,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };
    comments.value.push(newComment);
    return newComment;
  };

  return {
    comments,
    navigation,
    addComment,
  };
});
