<script setup lang="ts">
</script>

<template>
  <div class="h-full overflow-y-auto p-6 break-all">
    <h1 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">CSS Flexbox</h1>
    <section class="mb-8">
      <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Flexbox в CSS</h2>
      <p class="mb-6 text-lg text-gray-700 dark:text-gray-300">
        Flexbox (гибкий контейнер) — это способ компоновки элементов, который позволяет эффективно
        распределять пространство между элементами и выравнивать их различными способами.
      </p>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8 border-l-4 border-blue-500">
        <h3 class="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-300">📐 Основы Flexbox</h3>
        <p class="mb-4">Flexbox состоит из flex-контейнера и его дочерних элементов (flex-элементов).</p>
      </div>

      <div class="space-y-8 mb-8">
        <div>
          <h3 class="text-2xl font-semibold mb-4">📦 Свойства контейнера</h3>
          <ul class="space-y-4">
            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">1. display: flex</h4>
              <p class="text-gray-700 dark:text-gray-300">Создаёт flex-контейнер и делает его дочерние элементами flex-элементами.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">.container {
  display: flex; /* или inline-flex */
}</pre>
              </div>
            </li>

            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">2. Направление и перенос</h4>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">.container {
  flex-direction: row; /* row (по умолчанию), row-reverse, column, column-reverse */
  flex-wrap: nowrap;   /* nowrap (по умолчанию), wrap, wrap-reverse */
  /* Краткая запись: */
  flex-flow: row wrap; /* direction и wrap вместе */
}</pre>
              </div>
            </li>

            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">3. Выравнивание по главной оси</h4>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">.container {
  justify-content: flex-start; /* flex-start (по умолчанию), flex-end, center,
                               space-between, space-around, space-evenly */
}</pre>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-2xl font-semibold mb-4">📏 Выравнивание элементов</h3>
          <ul class="space-y-4">
            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">1. Выравнивание по поперечной оси</h4>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">.container {
  align-items: stretch; /* stretch (по умолчанию), flex-start, flex-end,
                        center, baseline */
}</pre>
              </div>
            </li>

            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">2. Многострочное выравнивание</h4>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">.container {
  align-content: stretch; /* stretch (по умолчанию), flex-start, flex-end,
                          center, space-between, space-around, space-evenly */
}</pre>
              </div>
            </li>

            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">3. Управление отдельными элементами</h4>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">.item {
  order: 0;          /* Порядок элемента (по умолчанию 0) */
  flex-grow: 0;      /* Может ли элемент увеличиваться */
  flex-shrink: 1;    /* Может ли элемент уменьшаться */
  flex-basis: auto;  /* Исходный размер элемента */
  /* Краткая запись: */
  flex: 0 1 auto;    /* grow, shrink, basis */

  align-self: auto;  /* Переопределение align-items для отдельного элемента */
}</pre>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl mb-8 border-l-4 border-yellow-500">
        <h3 class="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-300">💡 Практические примеры</h3>
        <p class="mb-4">Примеры использования Flexbox в реальных сценариях:</p>

        <div class="space-y-6">
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h4 class="font-bold text-lg mb-3 text-gray-800 dark:text-white">Гибкая навигация</h4>
            <pre class="text-sm text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto">.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #333;
  color: white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-links a:hover {
  background-color: #555;
}</pre>
          </div>

          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h4 class="font-bold text-lg mb-3 text-gray-800 dark:text-white">Карточки с равной высотой</h4>
            <pre class="text-sm text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto">.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1.5rem;
}

.card {
  flex: 1 1 300px; /* Базовый размер 300px, может расти и сжиматься */
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
  flex-grow: 1; /* Растягиваем контент на всю доступную высоту */
  display: flex;
  flex-direction: column;
}

.card h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.card p {
  margin-bottom: 1.5rem;
  flex-grow: 1; /* Растягиваем абзац, чтобы кнопка была прижата к низу */
}

.card button {
  align-self: flex-start; /* Выравниваем кнопку по левому краю */
  padding: 0.5rem 1rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.card button:hover {
  background: #45a049;
}</pre>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
