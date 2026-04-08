const STORAGE_KEY = "weblearn-progress";

const completedIds = ref<string[]>([]);
let loaded = false;

function load() {
  if (loaded) return;
  loaded = true;
  if (import.meta.client) {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        completedIds.value = data.completedLessonIds ?? [];
      }
    }
    catch {
      completedIds.value = [];
    }
  }
}

function save() {
  if (import.meta.client) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ completedLessonIds: completedIds.value }),
    );
  }
}

export function useProgress() {
  load();

  function isCompleted(lessonId: string): boolean {
    return completedIds.value.includes(lessonId);
  }

  function markCompleted(lessonId: string) {
    if (!isCompleted(lessonId)) {
      completedIds.value.push(lessonId);
      save();
    }
  }

  function getTopicProgress(topicLessonIds: string[]): { completed: number, total: number } {
    const completed = topicLessonIds.filter((id) => completedIds.value.includes(id)).length;
    return { completed, total: topicLessonIds.length };
  }

  return {
    completedIds,
    isCompleted,
    markCompleted,
    getTopicProgress,
  };
}
