import basicsData from "~/data/lessons/basics.json";
import htmlData from "~/data/lessons/html.json";
import cssData from "~/data/lessons/css.json";
import jsData from "~/data/lessons/js.json";
import coursesConfig from "~/data/courses.json";
import type { Lesson, CourseConfig, Topic } from "~/types/lesson";

const topicDataMap: Record<string, Lesson[]> = {
  basics: basicsData as Lesson[],
  html: htmlData as Lesson[],
  css: cssData as Lesson[],
  js: jsData as Lesson[],
};

export function useLessons() {
  const route = useRoute();

  const config = coursesConfig as CourseConfig;

  function getLesson(topic: string, slug: string): Lesson | null {
    const lessons = topicDataMap[topic];
    if (!lessons) return null;
    return lessons.find((l) => l.slug === slug) ?? null;
  }

  function getTopicLessons(topic: string): Lesson[] {
    return topicDataMap[topic] ?? [];
  }

  function getAllTopics(): Topic[] {
    return config.topics;
  }

  function getLessonById(id: string): Lesson | null {
    for (const lessons of Object.values(topicDataMap)) {
      const found = lessons.find((l) => l.id === id);
      if (found) return found;
    }
    return null;
  }

  function getNavigation() {
    const currentPath = route.path;
    const { isCompleted: isDone } = useProgress();

    return config.topics.map((topic) => {
      if (topic.lessons.length === 1 && topic.lessons[0]) {
        const ref = topic.lessons[0];
        const lesson = getLessonById(ref.id);
        const to = lesson ? `/education/${topic.id}/${lesson.slug}` : "#";
        const done = isDone(ref.id);
        return {
          label: ref.title,
          to,
          icon: done ? "i-heroicons-check-circle-solid" : undefined,
          class:
              currentPath === to
                ? "text-black bg-green-200/20 dark:bg-green-900/20 dark:text-green-400"
                : done
                  ? "text-green-600 dark:text-green-400"
                  : "",
        };
      }

      return {
        label: topic.title,
        children: topic.lessons.map((lessonRef) => {
          const lesson = getLessonById(lessonRef.id);
          const to = lesson ? `/education/${topic.id}/${lesson.slug}` : "#";
          const done = isDone(lessonRef.id);
          return {
            label: lessonRef.title,
            to,
            icon: done ? "i-heroicons-check-circle-solid" : undefined,
            class:
              currentPath === to
                ? "text-black bg-green-200/20 dark:bg-green-900/20 dark:text-green-400"
                : done
                  ? "text-green-600 dark:text-green-400"
                  : "",
          };
        }),
      };
    });
  }

  function getAdjacentLessons(lessonId: string): { prev: { id: string, title: string, to: string } | null, next: { id: string, title: string, to: string } | null } {
    const allLessons: { id: string, title: string, to: string }[] = [];
    for (const topic of config.topics) {
      for (const ref of topic.lessons) {
        const lesson = getLessonById(ref.id);
        if (lesson) {
          allLessons.push({
            id: ref.id,
            title: ref.title,
            to: `/education/${topic.id}/${lesson.slug}`,
          });
        }
      }
    }
    const idx = allLessons.findIndex((l) => l.id === lessonId);
    return {
      prev: idx > 0 ? allLessons[idx - 1]! : null,
      next: idx < allLessons.length - 1 ? allLessons[idx + 1]! : null,
    };
  }

  return {
    getLesson,
    getTopicLessons,
    getAllTopics,
    getLessonById,
    getNavigation,
    getAdjacentLessons,
  };
}
