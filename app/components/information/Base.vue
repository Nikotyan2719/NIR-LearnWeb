<script setup lang="ts">
</script>

<template>
  <div class="h-full overflow-y-auto p-6 break-all">
    <h1 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Урок 1</h1>
    <section class="mb-8">
      <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white">HTML (Язык разметки гипертекста)</h2>
      <p class="mb-6 text-lg text-gray-700 dark:text-gray-300">
        HTML (HyperText Markup Language) — стандартизированный язык разметки документов, разработанный консорциумом W3C. Это фундаментальная технология, лежащая в основе Всемирной паутины, которая определяет структуру и семантическое содержание веб-страниц. HTML работает в паре с CSS (для стилизации) и JavaScript (для интерактивности), образуя триаду основных технологий веб-разработки.
      </p>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8 border-l-4 border-blue-500">
        <h3 class="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-300">📜 Историческая справка</h3>
        <p class="mb-4">HTML был создан Тимом Бернерсом-Ли в 1991 году. Первая версия HTML содержала всего 18 тегов. С тех пор язык претерпел множество изменений, и последняя версия HTML5, выпущенная в 2014 году, привнесла семантические элементы, мультимедийную поддержку и API для сложных веб-приложений.</p>
        <p>Современный HTML5 включает более 100 элементов, поддерживает мультимедиа, графику, оффлайн-работу и многое другое без необходимости в плагинах.</p>
      </div>

      <div class="space-y-8 mb-8">
        <div>
          <h3 class="text-2xl font-semibold mb-4">🔑 Основные концепции HTML</h3>
          <ul class="space-y-4">
            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">1. Элементы и теги</h4>
              <p class="text-gray-700 dark:text-gray-300">HTML-документ состоит из элементов, которые обозначаются тегами. Теги бывают парные (<code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">&lt;p&gt;текст&lt;/p&gt;</code>) и одиночные (<code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">&lt;img&gt;</code>).</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200">&lt;h1&gt;Заголовок&lt;/h1&gt;</pre>
              </div>
            </li>
            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">2. Атрибуты</h4>
              <p class="text-gray-700 dark:text-gray-300">Атрибуты предоставляют дополнительную информацию об элементах. Они указываются в открывающем теге и состоят из имени и значения.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200">&lt;a href="https://example.com" target="_blank"&gt;Ссылка&lt;/a&gt;</pre>
              </div>
            </li>
            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">3. Семантика</h4>
              <p class="text-gray-700 dark:text-gray-300">
                Семантические элементы HTML5
                (<code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">&lt;header&gt;</code>,
                <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">&lt;nav&gt;</code>,
                <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">&lt;section&gt;</code>,
                <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">&lt;article&gt;</code>,
                <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">&lt;footer&gt;</code>)
                делают код более понятным для браузеров и поисковых систем.
              </p>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-2xl font-semibold mb-4">Продвинутые возможности</h3>
          <ul class="space-y-4">
            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">1. Формы и валидация</h4>
              <p class="text-gray-700 dark:text-gray-300">HTML5 предоставляет встроенную валидацию форм, различные типы полей ввода и элементы для сбора данных.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded text-sm overflow-auto">
                <pre class="text-gray-800 dark:text-gray-200">&lt;input type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"&gt;</pre>
              </div>
            </li>
            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">2. Мультимедиа</h4>
              <p class="text-gray-700 dark:text-gray-300">Встроенная поддержка аудио, видео и векторной графики без плагинов.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded text-sm overflow-auto">
                <pre class="text-gray-800 dark:text-gray-200">&lt;video width="320" height="240" controls&gt;
  &lt;source src="movie.mp4" type="video/mp4"&gt;
&lt;/video&gt;</pre>
              </div>
            </li>
            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">3. API и хранилища</h4>
              <p class="text-gray-700 dark:text-gray-300">
                <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">LocalStorage</code>,
                <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">SessionStorage</code>,
                <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">IndexedDB</code>,
                <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">Web Workers</code>,
                <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">Geolocation API</code>
                и другие технологии для создания оффлайн-приложений.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <h3 class="text-2xl font-semibold mb-4 mt-8 text-gray-800 dark:text-white">Полная структура HTML5 документа:</h3>
      <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 border border-gray-200 dark:border-gray-700">
        <pre class="whitespace-pre-wrap text-gray-800 dark:text-gray-200"><pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Моя первая страница&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Привет, мир!&lt;/h1&gt;
    &lt;p&gt;Это абзац текста.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre></pre>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-800 dark:text-white">CSS (Каскадные таблицы стилей)</h2>
      <p class="mb-6 text-lg text-gray-700 dark:text-gray-300">
        CSS (Cascading Style Sheets) — формальный язык описания внешнего вида веб-документов, разработанный W3C. CSS позволяет отделить содержимое (HTML) от его представления, что обеспечивает гибкость в управлении дизайном веб-сайтов. Современный CSS3 включает в себя анимации, переходы, трансформации и адаптивный дизайн.
      </p>

      <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl mb-8 border-l-4 border-purple-500">
        <h3 class="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-300">📈 Эволюция CSS</h3>
        <p class="mb-4">CSS был предложен Хоконом Виумом Ли в 1994 году. Первая версия CSS1 вышла в 1996 году. CSS2 появился в 1998 году, а работа над CSS3 началась в 1999 году и продолжается до сих пор, разбитая на модули, которые развиваются независимо друг от друга.</p>
        <p>Современный CSS поддерживает сложные анимации, кастомные свойства (CSS-переменные), Grid и Flexbox для вёрстки, фильтры, blend-режимы и многое другое.</p>
      </div>

      <div class="space-y-8 mb-8">
        <div>
          <h3 class="text-2xl font-semibold mb-4">🔑 Ключевые концепции CSS</h3>
          <div class="space-y-4">
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">1. Селекторы и специфичность</h4>
              <p class="text-gray-700 dark:text-gray-300">Селекторы определяют, к каким элементам применяются стили. Специфичность определяет приоритет правил.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded text-sm overflow-auto">
                <pre class="text-gray-800 dark:text-gray-200">/* Специфичность: 0,0,1,0 */
.element { color: blue; }

/* Специфичность: 0,1,0,0 */
#unique { color: red; }

/* Специфичность: 0,0,0,0 */
* { box-sizing: border-box; }</pre>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">2. Блочная модель</h4>
              <p class="text-gray-700 dark:text-gray-300">Каждый элемент представляет собой прямоугольный блок, состоящий из margin, border, padding и content.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded text-sm overflow-auto">
                <pre class="text-gray-800 dark:text-gray-200">.box {
  width: 300px;
  padding: 20px;
  border: 5px solid #333;
  margin: 10px;
  box-sizing: border-box; /* включает padding и border в width */
}</pre>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-semibold mb-4">✨ Современные возможности CSS</h3>
          <div class="space-y-4">
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">1. Flexbox</h4>
              <p class="text-gray-700 dark:text-gray-300">Одномерная модель макета, позволяющая эффективно распределять пространство между элементами.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded text-sm overflow-auto">
                <pre class="text-gray-800 dark:text-gray-200">.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}</pre>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">2. CSS Grid</h4>
              <p class="text-gray-700 dark:text-gray-300">Двумерная система макетов для создания сложных адаптивных дизайнов.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded text-sm overflow-auto">
                <pre class="text-gray-800 dark:text-gray-200">.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}</pre>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">3. Анимации и переходы</h4>
              <p class="text-gray-700 dark:text-gray-300">Создание плавных анимаций и переходов без использования JavaScript.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded text-sm overflow-auto">
                <pre class="text-gray-800 dark:text-gray-200">.button {
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.button:hover {
  transform: translateY(-2px);
  background-color: #4f46e5;
}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8 border border-gray-200 dark:border-gray-700">
        <h3 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">📱 Адаптивный дизайн</h3>
        <p class="mb-4 text-gray-700 dark:text-gray-300">Техники создания сайтов, которые корректно отображаются на устройствах с разными размерами экранов.</p>

        <h4 class="font-bold text-lg mt-4 mb-2 text-gray-800 dark:text-white">Медиа-запросы:</h4>
        <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <pre class="text-sm text-gray-800 dark:text-gray-200">/* Стили для мобильных устройств */
.container {
  padding: 10px;
}

/* Планшеты (768px и выше) */
@media (min-width: 768px) {
  .container {
    padding: 20px;
    max-width: 720px;
    margin: 0 auto;
  }
}

/* Настольные компьютеры (1024px и выше) */
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 2rem;
  }
}</pre>
        </div>

        <h4 class="font-bold text-lg mt-6 mb-2">Относительные единицы измерения:</h4>
        <ul class="list-disc pl-6 space-y-1 mb-4">
          <li><code>rem</code> - относительно размера шрифта корневого элемента</li>
          <li><code>em</code> - относительно размера шрифта родительского элемента</li>
          <li><code>vw/vh</code> - 1% от ширины/высоты области просмотра</li>
          <li><code>%</code> - процент от размера родительского элемента</li>
        </ul>
      </div>
      <div class="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4 border border-gray-200 dark:border-gray-700">
        <pre class="whitespace-pre-wrap text-gray-800 dark:text-gray-200">
h1 {
  color: #2d3748;
  font-size: 2rem;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}</pre>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-3xl font-bold mb-6 mt-12 text-gray-800 dark:text-white">JavaScript</h2>
      <p class="mb-6 text-lg text-gray-700 dark:text-gray-300">
        JavaScript — высокоуровневый, интерпретируемый язык программирования, который является одной из ключевых технологий веб-разработки. Позволяет создавать интерактивные веб-страницы, одностраничные приложения (SPA), серверные приложения (Node.js), мобильные приложения и даже десктопные приложения.
      </p>

      <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl mb-8 border-l-4 border-green-500">
        <h3 class="text-2xl font-semibold mb-4 text-green-800 dark:text-green-300">🔄 История и эволюция</h3>
        <p class="mb-4">JavaScript был создан Бренданом Эйхом в 1995 году для браузера Netscape Navigator. Задумывался как простой язык для добавления интерактивности на веб-страницы. В 1997 году был стандартизирован как ECMAScript. С 2015 года (ES6/ES2015) язык значительно изменился, получив множество новых возможностей.</p>
        <p>Современный JavaScript — это мощный мультипарадигменный язык, поддерживающий объектно-ориентированное, функциональное и императивное программирование.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 class="text-2xl font-semibold mb-4">🎯 Основные концепции</h3>
          <div class="space-y-4">
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">1. Типы данных и переменные</h4>
              <p class="text-gray-700 dark:text-gray-300">JavaScript имеет динамическую типизацию. Основные типы: примитивы (number, string, boolean, null, undefined, symbol, bigint) и объекты.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded text-sm overflow-auto">
                <pre class="text-gray-800 dark:text-gray-200">// Объявление переменных
const name = 'Иван';  // константа
let age = 25;         // изменяемая переменная
var oldWay = 'устаревший способ'; // устаревший способ

// Типы данных
const num = 42;
const str = 'Привет';
const bool = true;
const obj = { key: 'value' };
const arr = [1, 2, 3];
const func = () => {};</pre>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">2. Функции и замыкания</h4>
              <p class="text-gray-700 dark:text-gray-300">Функции являются объектами первого класса. Замыкания позволяют функциям запоминать лексическое окружение, в котором они были созданы.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded text-sm overflow-auto">
                <pre class="text-gray-800 dark:text-gray-200">// Объявление функций
function greet(name) {
  return `Привет, ${name}!`;
}

// Стрелочные функции
const add = (a, b) => a + b;

// Замыкание
function createCounter() {
  let count = 0;
  return {
    increment() { count++; },
    getCount() { return count; }
  };
}</pre>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-semibold mb-4">Современный JavaScript (ES6+)</h3>
          <div class="space-y-4">
            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">1. Деструктуризация и операторы</h4>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded text-sm overflow-auto">
                <pre class="text-gray-800 dark:text-gray-200">// Деструктуризация объектов
const user = { name: 'Иван', age: 30 };
const { name, age } = user;

// Деструктуризация массивов
const numbers = [1, 2, 3, 4];
const [first, second, ...rest] = numbers;

// Spread оператор
const newObj = { ...user, role: 'admin' };
const newArr = [...numbers, 5, 6];</pre>
              </div>
            </div>

            <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">2. Асинхронный JavaScript</h4>
              <p class="text-gray-700 dark:text-gray-300">Промисы и async/await для работы с асинхронными операциями.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded text-sm overflow-auto">
                <pre class="text-gray-800 dark:text-gray-200">// Промисы
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Ошибка:', error));

// Async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Ошибка:', error);
  }
}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8 border border-gray-200 dark:border-gray-700">
        <h3 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Работа с DOM</h3>
        <p class="mb-4">Document Object Model (DOM) — это программный интерфейс для HTML и XML документов, который представляет страницу в виде дерева объектов.</p>

        <h4 class="font-bold text-lg mt-4 mb-2">Основные операции с DOM:</h4>
        <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <pre class="text-sm text-gray-800 dark:text-gray-200">// Поиск элементов
const element = document.getElementById('id');
const elements = document.querySelectorAll('.class');

// Создание элементов
const div = document.createElement('div');
div.textContent = 'Новый элемент';
div.classList.add('my-class');

// Добавление на страницу
document.body.appendChild(div);

// Обработка событий
element.addEventListener('click', (event) => {
  console.log('Клик!', event.target);
});

// Изменение стилей
element.style.color = 'red';
element.classList.toggle('active');

// Анимации
element.animate([
  { transform: 'scale(1)' },
  { transform: 'scale(1.5)' }
], {
  duration: 1000,
  iterations: Infinity
});</pre>
        </div>
      </div>

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border-l-4 border-yellow-500 mb-8">
        <h3 class="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-300">💡 Полезные советы</h3>
        <h3 class="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-300">Современный стек технологий</h3>
        <p class="mb-4">Современная веб-разработка на JavaScript выходит за рамки чистого языка и включает в себя множество инструментов и библиотек:</p>

        <div class="grid md:grid-cols-3 gap-4 mt-4">
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <h4 class="font-bold text-gray-800 dark:text-white">Фреймворки</h4>
            <ul class="list-disc pl-5 mt-2 space-y-1">
              <li class="text-gray-700 dark:text-gray-300">React</li>
              <li class="text-gray-700 dark:text-gray-300">Vue.js</li>
              <li class="text-gray-700 dark:text-gray-300">Angular</li>
              <li class="text-gray-700 dark:text-gray-300">Svelte</li>
            </ul>
          </div>

          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <h4 class="font-bold text-gray-800 dark:text-white">Серверный JS</h4>
            <ul class="list-disc pl-5 mt-2 space-y-1">
              <li class="text-gray-700 dark:text-gray-300">Node.js</li>
              <li class="text-gray-700 dark:text-gray-300">Express</li>
              <li class="text-gray-700 dark:text-gray-300">NestJS</li>
              <li class="text-gray-700 dark:text-gray-300">Fastify</li>
            </ul>
          </div>

          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <h4 class="font-bold text-gray-800 dark:text-white">Инструменты</h4>
            <ul class="list-disc pl-5 mt-2 space-y-1">
              <li class="text-gray-700 dark:text-gray-300">Webpack</li>
              <li class="text-gray-700 dark:text-gray-300">Babel</li>
              <li class="text-gray-700 dark:text-gray-300">TypeScript</li>
              <li class="text-gray-700 dark:text-gray-300">ESLint/Prettier</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <pre class="whitespace-pre-wrap text-gray-800 dark:text-gray-200"><pre>// Это комментарий в JavaScript
const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('Кнопка нажата!');
  document.body.style.backgroundColor = 'lightblue';
});

// Переменные и функции
let message = 'Привет';
const name = 'Пользователь';

function greet() {
  return `${message}, ${name}!`;
}

console.log(greet()); // Вывод: Привет, Пользователь!</pre></pre>
      </div>
    </section>
  </div>
</template>
