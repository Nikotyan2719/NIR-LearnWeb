<script setup lang="ts">
</script>

<template>
  <div class="h-full overflow-y-auto p-6 break-all">
    <h1 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">CSS Позиционирование</h1>
    <section class="mb-8">
      <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Позиционирование в CSS</h2>
      <p class="mb-6 text-lg text-gray-700 dark:text-gray-300">
        CSS позиционирование позволяет управлять расположением элементов на веб-странице.
        Понимание различных типов позиционирования критически важно для создания сложных макетов.
      </p>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8 border-l-4 border-blue-500">
        <h3 class="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-300">📍 Типы позиционирования</h3>
        <p class="mb-4">В CSS существует несколько типов позиционирования, каждый из которых по-разному влияет на расположение элементов.</p>
      </div>

      <div class="space-y-8 mb-8">
        <div>
          <h3 class="text-2xl font-semibold mb-4">🔍 Основные типы</h3>
          <ul class="space-y-4">
            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">1. Static (по умолчанию)</h4>
              <p class="text-gray-700 dark:text-gray-300">Элементы располагаются в нормальном потоке документа. Свойства top, right, bottom, left и z-index не применяются.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">.box {
  position: static;
  /* top, right, bottom, left не работают */
}</pre>
              </div>
            </li>

            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">2. Relative</h4>
              <p class="text-gray-700 dark:text-gray-300">Элемент позиционируется относительно своего нормального положения. Остальное содержимое ведёт себя так, как если бы элемент не был сдвинут.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">.box {
  position: relative;
  top: 20px;
  left: 30px;
  /* Сдвигает элемент на 20px вниз и 30px вправо */
  /* от его нормального положения */
}</pre>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-2xl font-semibold mb-4">🎯 Абсолютное позиционирование</h3>
          <ul class="space-y-4">
            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">3. Absolute</h4>
              <p class="text-gray-700 dark:text-gray-300">Элемент удаляется из нормального потока документа и позиционируется относительно ближайшего позиционированного родителя (не static).</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">.parent {
  position: relative; /* Создаёт контекст позиционирования */
  width: 300px;
  height: 200px;
  background: #f0f0f0;
}

.child {
  position: absolute;
  top: 20px;
  right: 30px;
  width: 100px;
  height: 100px;
  background: #4CAF50;
}</pre>
              </div>
            </li>

            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">4. Fixed</h4>
              <p class="text-gray-700 dark:text-gray-300">Элемент позиционируется относительно окна браузера и остаётся на месте при прокрутке страницы.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #333;
  color: white;
  z-index: 1000;
}

/* Добавляем отступ для основного контента,
   чтобы он не скрывался под фиксированным хедером */
.content {
  margin-top: 60px;
}</pre>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl mb-8 border-l-4 border-yellow-500">
        <h3 class="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-300">💡 Практические примеры</h3>
        <p class="mb-4">Примеры использования различных типов позиционирования:</p>

        <div class="space-y-6">
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h4 class="font-bold text-lg mb-3 text-gray-800 dark:text-white">Модальное окно</h4>
            <pre class="text-sm text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto">/* Затемнение фона */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Само модальное окно */
.modal {
  position: relative;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
}

/* Кнопка закрытия */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}</pre>
          </div>

          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h4 class="font-bold text-lg mb-3 text-gray-800 dark:text-white">Липкий заголовок таблицы</h4>
            <pre class="text-sm text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto">.table-container {
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid #ddd;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  position: sticky;
  top: 0;
  background: #f8f9fa;
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #dee2e6;
}

td {
  padding: 12px;
  border-bottom: 1px solid #dee2e6;
}

/* Для браузеров, поддерживающих position: sticky */
@supports ((position: -webkit-sticky) or (position: sticky)) {
  th {
    position: -webkit-sticky;
    position: sticky;
  }
}</pre>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
