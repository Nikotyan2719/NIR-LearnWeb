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
  const { lessonTitle, taskDescription, code, language } = body;

  if (!code || !language) {
    throw createError({
      statusCode: 400,
      statusMessage: "code and language are required",
    });
  }

  const langName: Record<string, string> = {
    javascript: "JavaScript",
    html: "HTML",
    css: "CSS",
  };

  const prompt = `Ты — опытный преподаватель программирования. Ученик выполняет практическое задание.

Урок: "${lessonTitle || "Практика"}"
Задание: ${taskDescription || "Напишите код на тему урока"}
Язык: ${langName[language] || language}

Код ученика:
\`\`\`${language}
${code}
\`\`\`

Проанализируй код ученика. Отвечай на русском языке, кратко (3-5 предложений).
Структура ответа:
1. Что сделано хорошо (если есть)
2. Ошибки и проблемы (если есть)
3. Советы по улучшению
Если код правильный — похвали и предложи дополнительное усложнение.`;

  const response = await $fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: {
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: "Ты — helpful преподаватель программирования. Отвечаешь кратко и по делу на русском языке. Используешь markdown для форматирования кода.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.3,
      max_tokens: 500,
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

  return { review: choice };
});
