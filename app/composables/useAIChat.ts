type ChatMessage = {
  role: "user" | "assistant"
  content: string
};

export function useAIChat() {
  const messages = ref<ChatMessage[]>([]);
  const loading = ref(false);
  const error = ref("");

  async function sendMessage(text: string, lessonTitle: string, lessonDescription: string) {
    if (!text.trim() || loading.value) return;
    const userMessage: ChatMessage = { role: "user", content: text.trim() };
    messages.value.push(userMessage);
    loading.value = true;
    error.value = "";

    try {
      const data = await $fetch<{ reply: string }>("/api/ai-chat", {
        method: "POST",
        body: { lessonTitle, lessonDescription, messages: messages.value },
      });
      messages.value.push({ role: "assistant", content: data.reply });
    }
    catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Произошла ошибка";
      error.value = `Ошибка: ${msg}`;
    }
    finally { loading.value = false; }
  }

  function clear() {
    messages.value = [];
    error.value = "";
  }

  return { messages, loading, error, sendMessage, clear };
}
