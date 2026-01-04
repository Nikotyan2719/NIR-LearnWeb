<script setup lang="ts">
</script>

<template>
  <div class="h-full overflow-y-auto p-6 break-all">
    <h1 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">📚 Основы HTML</h1>

    <section class="mb-8">
      <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white">🌐 Введение в HTML</h2>
      <p class="mb-6 text-lg text-gray-700 dark:text-gray-300">
        HTML (HyperText Markup Language) - стандартный язык разметки для создания веб-страниц.
        Это основа веб-разработки, которая определяет структуру и содержимое веб-страниц.
        HTML использует теги для обозначения различных элементов на странице.
      </p>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8 border-l-4 border-blue-500">
        <h3 class="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-300">📜 История HTML</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>1991</strong> - Тим Бернерс-Ли создал HTML</li>
          <li><strong>1995</strong> - HTML 2.0 (первая официальная версия)</li>
          <li><strong>1997</strong> - HTML 3.2 (поддержка таблиц и форм)</li>
          <li><strong>1999</strong> - HTML 4.01 (последняя версия перед XHTML)</li>
          <li><strong>2014</strong> - HTML5 (современный стандарт)</li>
        </ul>
      </div>

      <div class="mb-8">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
          <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">📄 Структура документа</h3>
          <pre class="text-xs bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="ru"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;meta name="description" content="Описание страницы"&gt;
    &lt;title&gt;Заголовок страницы&lt;/title&gt;
    &lt;link rel="stylesheet" href="styles.css"&gt;
    &lt;script src="script.js" defer&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;Привет, мир!&lt;/h1&gt;
        &lt;nav&gt;...навигация...&lt;/nav&gt;
    &lt;/header&gt;

    &lt;main&gt;
        &lt;article&gt;
            &lt;h2&gt;Заголовок статьи&lt;/h2&gt;
            &lt;p&gt;Моя первая веб-страница с семантической разметкой.&lt;/p&gt;
        &lt;/article&gt;
    &lt;/main&gt;

    &lt;footer&gt;
        &lt;p&gt;© 2023 Мой сайт&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">🏷️ Основные теги HTML</h3>
          <div class="space-y-6">
            <div>
              <h4 class="font-semibold text-gray-700 dark:text-gray-200">📝 Заголовки</h4>
              <ul class="ml-4 space-y-1 mt-2">
                <li><code>&lt;h1&gt;...&lt;/h1&gt;</code> - главный заголовок (только один на странице)</li>
                <li><code>&lt;h2&gt;-&lt;h6&gt;</code> - подзаголовки разного уровня</li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold text-gray-700 dark:text-gray-200">✏️ Текст</h4>
              <ul class="ml-4 space-y-1 mt-2">
                <li><code>&lt;p&gt;...&lt;/p&gt;</code> - абзац</li>
                <li><code>&lt;span&gt;...&lt;/span&gt;</code> - строчный контейнер</li>
                <li><code>&lt;br&gt;</code> - перенос строки</li>
                <li><code>&lt;hr&gt;</code> - горизонтальная линия</li>
                <li><code>&lt;pre&gt;...&lt;/pre&gt;</code> - преформатированный текст</li>
                <li><code>&lt;code&gt;...&lt;/code&gt;</code> - фрагмент кода</li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold text-gray-700 dark:text-gray-200">🔗 Ссылки и изображения</h4>
              <ul class="ml-4 space-y-1 mt-2">
                <li><code>&lt;a href="URL"&gt;...&lt;/a&gt;</code> - гиперссылка</li>
                <li><code>&lt;img src="image.jpg" alt="описание"&gt;</code> - изображение</li>
                <li><code>&lt;picture&gt;...&lt;/picture&gt;</code> - адаптивное изображение</li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold text-gray-700 dark:text-gray-200">📋 Списки</h4>
              <ul class="ml-4 space-y-1 mt-2">
                <li><code>&lt;ul&gt;...&lt;/ul&gt;</code> - маркированный список</li>
                <li><code>&lt;ol&gt;...&lt;/ol&gt;</code> - нумерованный список</li>
                <li><code>&lt;li&gt;...&lt;/li&gt;</code> - элемент списка</li>
                <li><code>&lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt;</code> - список определений</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 mb-6">
          <h3 class="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-300">🌍 Глобальные атрибуты</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li><code>class="имя"</code> - для стилизации и выбора элементов</li>
            <li><code>id="уникальный-идентификатор"</code> - уникальный идентификатор элемента</li>
            <li><code>style="свойства CSS"</code> - встроенные стили (не рекомендуется для больших проектов)</li>
            <li><code>title="всплывающая подсказка"</code> - всплывающая подсказка при наведении</li>
            <li><code>data-*="значение"</code> - пользовательские атрибуты данных</li>
            <li><code>contenteditable="true|false"</code> - разрешает редактирование содержимого</li>
            <li><code>hidden</code> - скрывает элемент</li>
            <li><code>tabindex="число"</code> - определяет порядок перехода по Tab</li>
          </ul>
        </div>

        <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-2xl font-semibold mb-4 text-green-800 dark:text-green-300">🎯 Специфичные атрибуты</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li><code>href="URL"</code> - адрес ссылки или ресурса</li>
            <li><code>src="путь"</code> - путь к внешнему ресурсу</li>
            <li><code>alt="альтернативный текст"</code> - альтернативный текст для изображений</li>
            <li><code>target="_blank|_self|_parent|_top"</code> - где открывать ссылку</li>
            <li><code>disabled</code> - отключает элемент формы</li>
            <li><code>checked</code> - отмечает чекбокс/радиокнопку</li>
            <li><code>placeholder="подсказка"</code> - подсказка в поле ввода</li>
            <li><code>required</code> - обязательное поле формы</li>
          </ul>
        </div>
      </div>

      <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl mb-8 border-l-4 border-purple-500">
        <h3 class="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-300">🏆 Лучшие практики HTML</h3>
        <ul class="list-decimal pl-6 space-y-3">
          <li>Всегда указывайте <code>&lt;!DOCTYPE html&gt;</code> в начале документа</li>
          <li>Используйте семантические теги (<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code> и т.д.)</li>
          <li>Всегда указывайте атрибут <code>alt</code> для изображений</li>
          <li>Используйте <code>id</code> только для уникальных элементов</li>
          <li>Не используйте теги для стилизации (например, <code>&lt;b&gt;</code>, <code>&lt;i&gt;</code>) - для этого есть CSS</li>
          <li>Проверяйте валидность HTML с помощью <a href="https://validator.w3.org/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-400">валидатора W3C</a></li>
          <li>Используйте отступы и форматирование для лучшей читаемости кода</li>
          <li>Комментируйте сложные или неочевидные части кода с помощью <code>&lt;!-- комментарий --&gt;</code></li>
        </ul>
      </div>
    </section>
  </div>
</template>
