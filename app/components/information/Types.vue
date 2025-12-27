<script setup lang="ts">

</script>

<template>
  <div class="h-full overflow-y-auto p-6 break-all">
    <h1 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Типы данных в JavaScript</h1>
    <section class="mb-8">
      <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Типы данных в JavaScript</h2>
      <p class="mb-6 text-lg text-gray-700 dark:text-gray-300">
        JavaScript — язык с динамической типизацией, что означает, что тип переменной определяется автоматически во время выполнения программы. В JavaScript существует 8 основных типов данных: 7 примитивных типов и объекты.
      </p>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8 border-l-4 border-blue-500">
        <h3 class="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-300">Особенности типов в JavaScript</h3>
        <p class="mb-4">JavaScript использует динамическую типизацию, что позволяет переменной менять тип в процессе выполнения кода. Однако, начиная с ES6, появились <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">let</code> и <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">const</code> для блочной области видимости.</p>
        <p>Оператор <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">typeof</code> помогает определить тип значения переменной, но имеет свои особенности, например, <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">typeof null</code> возвращает <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">"object"</code>.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 class="text-2xl font-semibold mb-4">Примитивные типы</h3>
          <ul class="space-y-4">
            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">1. Number</h4>
              <p class="text-gray-700 dark:text-gray-300">Числовой тип. Включает целые числа и числа с плавающей точкой. Также включает специальные значения: <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">Infinity</code>, <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">-Infinity</code> и <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">NaN</code> (Not a Number).</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">let num = 42;
let float = 3.14;
let inf = Infinity;
let notANumber = NaN;</pre>
              </div>
            </li>

            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">2. String</h4>
              <p class="text-gray-700 dark:text-gray-300">Строковый тип. Может быть объявлен с помощью одинарных, двойных или обратных кавычек (шаблонные строки).</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">let str1 = 'Привет';
let str2 = "Мир";
let template = `Строка: ${str1} ${str2}!`;</pre>
              </div>
            </li>

            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">3. Boolean</h4>
              <p class="text-gray-700 dark:text-gray-300">Логический тип. Имеет два значения: <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">true</code> и <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">false</code>.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">let isTrue = true;
let isFalse = false;
let isGreater = 5 > 3; // true</pre>
              </div>
            </li>

            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">4. Null</h4>
              <p class="text-gray-700 dark:text-gray-300">Специальное значение, которое представляет собой отсутствие какого-либо объекта. <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">typeof null</code> возвращает <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">"object"</code>, что является исторической ошибкой.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">let empty = null;
console.log(typeof empty); // "object"</pre>
              </div>
            </li>

            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">5. Undefined</h4>
              <p class="text-gray-700 dark:text-gray-300">Означает, что переменная была объявлена, но не инициализирована.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">let x;
console.log(x); // undefined
console.log(typeof x); // "undefined"</pre>
              </div>
            </li>

            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">6. Symbol</h4>
              <p class="text-gray-700 dark:text-gray-300">Новый примитивный тип, добавленный в ES6. Символы гарантированно уникальны и используются в качестве ключей для свойств объектов.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">const id = Symbol('id');
let user = {
  [id]: 123,
  name: 'Вася'
};

console.log(user[id]); // 123</pre>
              </div>
            </li>

            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">7. BigInt</h4>
              <p class="text-gray-700 dark:text-gray-300">Добавлен в ES2020 для работы с большими целыми числами. Создается добавлением <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">n</code> в конец числа или вызовом <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">BigInt()</code>.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">const bigNumber = 1234567890123456789012345678901234567890n;
const bigInt = BigInt("9007199254740991");

console.log(bigNumber + 1n); // 1234567890123456789012345678901234567891n</pre>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-2xl font-semibold mb-4">Сложные типы</h3>
          <ul class="space-y-4">
            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">8. Object</h4>
              <p class="text-gray-700 dark:text-gray-300">Коллекция свойств (пар ключ-значение). Объекты используются для хранения сложных структур данных.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">let user = {
  name: 'Иван',
  age: 30,
  isAdmin: true
};

console.log(user.name); // "Иван"</pre>
              </div>
            </li>

            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">9. Array</h4>
              <p class="text-gray-700 dark:text-gray-300">Упорядоченная коллекция данных. В JavaScript массивы реализованы как объекты.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">let fruits = ['Яблоко', 'Апельсин', 'Груша'];
console.log(fruits[0]); // "Яблоко"
console.log(fruits.length); // 3</pre>
              </div>
            </li>

            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">10. Function</h4>
              <p class="text-gray-700 dark:text-gray-300">Функции в JavaScript являются объектами первого класса, что позволяет передавать их как аргументы и возвращать из других функций.</p>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">function greet(name) {
  return `Привет, ${name}!`;
}

// Стрелочная функция
const add = (a, b) => a + b;</pre>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl mb-8 border-l-4 border-yellow-500">
        <h3 class="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-300">Проверка типов</h3>
        <p class="mb-4">В JavaScript есть несколько способов проверки типов:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li><code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">typeof</code> - определяет примитивные типы</li>
          <li><code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">instanceof</code> - проверяет принадлежность к классу</li>
          <li><code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">Array.isArray()</code> - проверяет, является ли значение массивом</li>
          <li><code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">Object.prototype.toString.call()</code> - точное определение типа</li>
        </ul>
        <div class="mt-4 p-2 bg-gray-100 dark:bg-gray-700 rounded">
          <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">console.log(typeof 42); // "number"
console.log(typeof 'text'); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (историческая ошибка)
console.log(typeof []); // "object"
console.log(Array.isArray([])); // true
console.log(Object.prototype.toString.call([])); // "[object Array]"</pre>
        </div>
      </div>

      <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl mb-8 border-l-4 border-green-500">
        <h3 class="text-2xl font-semibold mb-4 text-green-800 dark:text-green-300">Практическое задание</h3>
        <p class="mb-4">Попробуйте создать переменные разных типов и вывести их типы с помощью оператора <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">typeof</code>.</p>
        <p class="mb-4">Пример:</p>
        <div class="mb-6">
          <UiCodeEditor />
        </div>
        <p>Попробуйте создать переменные следующих типов: число, строка, булево значение, массив, объект, null, undefined. Выведите их типы в консоль и посмотрите на результат.</p>
      </div>
    </section>
  </div>
</template>
