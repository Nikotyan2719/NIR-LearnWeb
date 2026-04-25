export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const apiKey = config.groqApiKey;

  if (!apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "GROQ_API_KEY is not configured",
    });
  }

  const body = await readBody(event);
  const { lessonTitle, lessonDescription, messages } = body;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: "messages are required",
    });
  }

  const systemPrompt = `Ты — дружелюбный AI-ассистент на образовательной платформе по веб-разработке. 
Ты помогаешь ученикам разобраться в материале уроков.

Текущий урок: "${lessonTitle || "Урок"}"
${lessonDescription ? `Описание урока: ${lessonDescription}` : ""}

Правила:
- Отвечай на русском языке
- Давай чёткие и понятные объяснения
- Используй примеры кода где уместно (оборачивай в \`\`\`язык ... \`\`\`)
- Если вопрос не по теме урока — вежливо скажи об этом и постарайся помочь
- Форматируй ответ с помощью markdown: **жирный** для акцентов, \`код\` для inline кода
- Будь дружелюбным и поддерживающим
- Отвечай кратко, но информативно (до 3-4 абзацев)`;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const apiMessages: any[] = [
    { role: "system", content: systemPrompt },
    ...messages.map((m: { role: string, content: string }) => ({
      role: m.role,
      content: m.content,
    })),
  ];

  const response = await $fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: {
      model: "llama-3.3-70b-versatile",
      messages: apiMessages,
      temperature: 0.5,
      max_tokens: 800,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const choice = (response as any)?.choices?.[0]?.message?.content;
  if (!choice) {
    throw createError({
      statusCode: 502,
      statusMessage: "No response from AI",
    });
  }

  return { reply: choice };
});
