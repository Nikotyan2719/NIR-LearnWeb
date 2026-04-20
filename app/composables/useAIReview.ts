export function useAIReview() {
  const state = reactive({
    loading: false,
    review: "",
    error: "",
  });

  async function submitReview(
    lessonTitle: string,
    taskDescription: string,
    code: string,
    language: string,
  ) {
    if (state.loading) return;
    if (!code.trim()) {
      state.error = "Напишите код перед проверкой";
      return;
    }

    state.loading = true;
    state.error = "";
    state.review = "";

    try {
      const data = await $fetch<{ review: string }>("/api/ai-review", {
        method: "POST",
        body: { lessonTitle, taskDescription, code, language },
      });
      state.review = data.review;
    }
    catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Произошла ошибка";
      state.error = `Ошибка: ${msg}`;
    }
    finally {
      state.loading = false;
    }
  }

  function clear() {
    state.review = "";
    state.error = "";
  }

  return { state, submitReview, clear };
}
