<script setup lang="ts">
</script>

<template>
  <div class="h-full overflow-y-auto p-6 break-all">
    <h1 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white">CSS Селекторы</h1>

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Введение в CSS-селекторы</h2>
      <p class="mb-6 text-lg text-gray-700 dark:text-gray-300">
        CSS-селекторы — это мощный инструмент для выбора и стилизации HTML-элементов. Они позволяют применять стили к конкретным элементам, группам элементов или элементам в определённом состоянии.
      </p>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8 border-l-4 border-blue-500">
        <h3 class="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-300">🎯 Основные типы селекторов</h3>
        <p class="mb-4">CSS предлагает различные способы выбора элементов: от простых селекторов по тегам до сложных псевдоклассов и комбинаторов.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">📋 Простые селекторы</h3>
          <ul class="space-y-4">
            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold mb-2 text-gray-800 dark:text-white">1. Универсальный селектор (*)</h4>
              <p class="text-gray-700 dark:text-gray-300 mb-2">Выбирает все элементы на странице.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}</pre>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">⚠️ Используйте осторожно — может повлиять на производительность.</p>
            </li>

            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold mb-2 text-gray-800 dark:text-white">2. Селектор по тегу</h4>
              <p class="text-gray-700 dark:text-gray-300 mb-2">Выбирает все элементы с указанным именем тега.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">p {
  color: #333;
  line-height: 1.6;
  margin-bottom: 1em;
}

h1 {
  font-size: 2rem;
  margin-bottom: 0.5em;
}</pre>
              </div>
            </li>

            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold mb-2 text-gray-800 dark:text-white">3. Селектор по классу</h4>
              <p class="text-gray-700 dark:text-gray-300 mb-2">Выбирает элементы с указанным классом (самый распространённый).</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">.button {
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.alert.error {
  background-color: #fee;
  border: 1px solid #f99;
  color: #900;
}</pre>
              </div>
            </li>

            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold mb-2 text-gray-800 dark:text-white">4. Селектор по ID</h4>
              <p class="text-gray-700 dark:text-gray-300 mb-2">Выбирает элемент с уникальным ID (только один элемент!).</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">#header {
  background: #2c3e50;
  color: white;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

#main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}</pre>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">❗ ID должен быть уникальным на странице.</p>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-4">🔗 Составные селекторы</h3>
          <ul class="space-y-4">
            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold mb-2 text-gray-800 dark:text-white">1. Селектор атрибутов</h4>
              <p class="text-gray-700 dark:text-gray-300 mb-2">Выбирает элементы по их атрибутам.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">/* Все input с type="text" */
input[type="text"] {
  border: 2px solid #4CAF50;
  padding: 8px;
}

/* Ссылки, начинающиеся с https */
a[href^="https://"] {
  color: green;
}

/* Ссылки, содержащие "example" */
a[href*="example"] {
  text-decoration: underline;
}

/* Ссылки, заканчивающиеся на .pdf */
a[href$=".pdf"] {
  background: url('pdf-icon.png') no-repeat right;
  padding-right: 20px;
}</pre>
              </div>
            </li>

            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold mb-2 text-gray-800 dark:text-white">2. Комбинаторы</h4>
              <p class="text-gray-700 dark:text-gray-300 mb-2">Указывают отношения между элементами.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">/* Прямые потомки */
nav > ul > li {
  display: inline-block;
  margin: 0 10px;
}

/* Смежные соседи (непосредственно следующий) */
h2 + p {
  font-size: 1.1em;
  margin-top: 5px;
}

/* Общие соседи (все следующие) */
h2 ~ p {
  color: #666;
  line-height: 1.7;
}

/* Потомки (любой уровень вложенности) */
.container .item {
  padding: 10px;
  border: 1px solid #ddd;
}</pre>
              </div>
            </li>

            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">3. Группировка селекторов</h4>
              <p class="text-gray-700 dark:text-gray-300">Позволяет применить один набор стилей к нескольким элементам.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">/* Согласованные заголовки */
h1, h2, h3 {
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.5em;
  color: #2c3e50;
}

/* Все кнопки и кнопкоподобные элементы */
button,
.button,
[role="button"],
input[type="button"],
input[type="submit"],
input[type="reset"] {
  font: inherit;
  cursor: pointer;
  padding: 10px 20px;
  border: 2px solid transparent;
  border-radius: 6px;
  transition: all 0.2s ease;
  background-color: #3498db;
  color: white;
}</pre>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl mb-8 border-l-4 border-green-500">
        <h3 class="text-xl font-semibold mb-4 text-green-800 dark:text-green-300">🎭 Псевдоклассы и псевдоэлементы</h3>
        <p class="mb-4">Специальные селекторы для элементов в определённом состоянии или для стилизации частей элементов.</p>

        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h4 class="font-bold mb-3 text-gray-800 dark:text-white">Псевдоклассы (:)</h4>
            <pre class="text-sm text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto">/* Состояния ссылок */
a:link { color: #3498db; }
a:visited { color: #9b59b6; }
a:hover {
  color: #2980b9;
  text-decoration: underline;
}
a:active { color: #e74c3c; }
a:focus { outline: 2px solid #3498db; }

/* Структурные псевдоклассы */
li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }
li:nth-child(odd) { background: #f8f9fa; }
li:nth-child(even) { background: #e9ecef; }
li:nth-child(3n) { color: #e74c3c; }

/* Состояния форм */
input:required { border-color: #e74c3c; }
input:disabled { opacity: 0.5; cursor: not-allowed; }
input:checked + label { font-weight: bold; }</pre>
          </div>

          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h4 class="font-bold mb-3 text-gray-800 dark:text-white">Псевдоэлементы (::)</h4>
            <pre class="text-sm text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto">/* Декоративные элементы */
p::first-line { font-weight: bold; }
p::first-letter {
  font-size: 2em;
  float: left;
  margin-right: 5px;
}

/* Добавление контента */
blockquote::before {
  content: "«";
  font-size: 2em;
  color: #95a5a6;
}
blockquote::after {
  content: "»";
  font-size: 2em;
  color: #95a5a6;
}

/* Выделение текста */
::selection {
  background: #3498db;
  color: white;
}

/* Плейсхолдер */
input::placeholder {
  color: #95a5a6;
  font-style: italic;
}

/* Маркеры списка */
li::marker {
  color: #e74c3c;
  font-weight: bold;
}</pre>
          </div>
        </div>
      </div>

      <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl mb-8 border-l-4 border-purple-500">
        <h3 class="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-300">🏆 Лучшие практики</h3>

        <div class="space-y-4">
          <div class="flex items-start">
            <div class="flex-shrink-0 w-6 h-6 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mr-3 mt-1">
              <span class="text-purple-600 dark:text-purple-300">✓</span>
            </div>
            <div>
              <h4 class="font-semibold text-gray-800 dark:text-white mb-1">Используйте классы вместо ID</h4>
              <p class="text-gray-700 dark:text-gray-300">Классы можно переиспользовать и имеют меньшую специфичность, что делает CSS более гибким.</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="flex-shrink-0 w-6 h-6 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mr-3 mt-1">
              <span class="text-purple-600 dark:text-purple-300">✓</span>
            </div>
            <div>
              <h4 class="font-semibold text-gray-800 dark:text-white mb-1">Избегайте излишней вложенности</h4>
              <p class="text-gray-700 dark:text-gray-300">`.nav ul li a` менее эффективен, чем `.nav-link`. Слишком глубокая вложенность усложняет переопределение стилей.</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="flex-shrink-0 w-6 h-6 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mr-3 mt-1">
              <span class="text-purple-600 dark:text-purple-300">✓</span>
            </div>
            <div>
              <h4 class="font-semibold text-gray-800 dark:text-white mb-1">Начинайте с менее специфичных селекторов</h4>
              <p class="text-gray-800 dark:text-gray-300">Используйте классы для базовых стилей, а более специфичные селекторы (с атрибутами или вложенностью) — для особых случаев.</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="flex-shrink-0 w-6 h-6 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mr-3 mt-1">
              <span class="text-purple-600 dark:text-purple-300">✓</span>
            </div>
            <div>
              <h4 class="font-semibold text-gray-800 dark:text-white mb-1">Используйте семантические имена классов</h4>
              <p class="text-gray-700 dark:text-gray-300">`.btn-primary` лучше, чем `.red-button`. Имена должны описывать функцию, а не внешний вид.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl mb-8 border-l-4 border-yellow-500">
        <h3 class="text-xl font-semibold mb-4 text-yellow-800 dark:text-yellow-300">💻 Практические примеры</h3>

        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h4 class="font-bold text-lg mb-3 text-gray-800 dark:text-white">Адаптивное меню</h4>
            <pre class="text-sm text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto">/* Базовые стили */
.nav {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem;
}

.nav__list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1rem;
}

.nav__link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

/* Состояния */
.nav__link:hover,
.nav__link:focus {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.nav__link.active {
  background: white;
  color: #667eea;
}

/* Мобильная версия */
@media (max-width: 768px) {
  .nav__list {
    flex-direction: column;
    gap: 0.5rem;
  }

  .nav__link {
    text-align: center;
  }
}</pre>
          </div>

          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h4 class="font-bold text-lg mb-3 text-gray-800 dark:text-white">Интерактивная таблица</h4>
            <pre class="text-sm text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto">.data-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 2rem 0;
}

.data-table th {
  background: #f8f9fa;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  border-bottom: 3px solid #dee2e6;
  position: sticky;
  top: 0;
}

.data-table td {
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
  transition: background 0.2s ease;
}

/* Чередование строк */
.data-table tbody tr:nth-child(even) {
  background: #f8f9fa;
}

/* Эффект при наведении */
.data-table tbody tr:hover {
  background: #e9ecef;
}

/* Стили для важных ячеек */
.data-table td.important {
  background: #fff3cd;
  font-weight: bold;
  color: #856404;
}

/* Стили для последней строки */
.data-table tfoot td {
  background: #343a40;
  color: white;
  font-weight: bold;
}</pre>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
