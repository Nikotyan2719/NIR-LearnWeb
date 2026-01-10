<script setup lang="ts">
</script>

<template>
  <div class="h-full overflow-y-auto p-6 break-all">
    <h1 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">JavaScript Функции</h1>
    <section class="mb-8">
      <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Функции в JavaScript</h2>
      <p class="mb-6 text-lg text-gray-700 dark:text-gray-300">
        Функции являются основными строительными блоками программы на JavaScript.
        Они позволяют инкапсулировать логику и повторно использовать код.
      </p>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8 border-l-4 border-blue-500">
        <h3 class="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-300">⚙️ Основы функций</h3>
        <p class="mb-4">В JavaScript функции можно объявлять несколькими способами, каждый из которых имеет свои особенности.</p>
      </div>

      <div class="space-y-8 mb-8">
        <div>
          <h3 class="text-2xl font-semibold mb-4">📝 Объявление функций</h3>
          <ul class="space-y-4">
            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">1. Function Declaration</h4>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">// Функция объявляется с помощью ключевого слова function
function greet(name) {
  return `Привет, ${name}!`;
}

// Вызов функции
const greeting = greet('Мир'); // 'Привет, Мир!'

// Особенность: можно вызвать до объявления (поднятие - hoisting)
sayHello(); // Работает

function sayHello() {
  console.log('Привет!');
}</pre>
              </div>
            </li>

            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">2. Function Expression</h4>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">// Функция присваивается переменной
const multiply = function(a, b) {
  return a * b;
};

// Вызов функции
const result = multiply(5, 3); // 15

// Нельзя вызвать до объявления
// sayHi(); // Ошибка: sayHi is not a function

const sayHi = function() {
  console.log('Привет!');
};</pre>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-2xl font-semibold mb-4">🚀 Современный JavaScript</h3>
          <ul class="space-y-4">
            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">3. Стрелочные функции (ES6+)</h4>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">// Базовая стрелочная функция
const add = (a, b) => {
  return a + b;
};

// Если тело функции состоит из одной строки, можно опустить {} и return
const square = x => x * x;

// Если параметр один, скобки можно опустить
const greet = name => `Привет, ${name}!`;

// Без параметров
const sayHello = () => console.log('Привет!');

// Особенности:
// - Нет своего this (берет из внешней области видимости)
// - Не имеют своего объекта arguments
// - Не могут быть использованы как конструкторы (нет prototype)
// - Не имеют super</pre>
              </div>
            </li>

            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">4. Параметры по умолчанию</h4>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">// Параметры по умолчанию (ES6+)
function createUser(name, age = 18, isAdmin = false) {
  return { name, age, isAdmin };
}

const user1 = createUser('Анна'); // { name: 'Анна', age: 18, isAdmin: false }
const user2 = createUser('Иван', 25, true);

// Можно использовать выражения в параметрах по умолчанию
function createMessage(text, timestamp = new Date().toISOString()) {
  return { text, timestamp };
}</pre>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl mb-8 border-l-4 border-yellow-500">
        <h3 class="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-300">🔒 Замыкания и область видимости</h3>
        <p class="mb-4">Функции в JavaScript имеют доступ к переменным из внешних областей видимости, что позволяет создавать замыкания.</p>

        <div class="space-y-4">
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">Пример замыкания</h4>
            <pre class="text-sm text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto">function createCounter() {
  let count = 0; // Приватная переменная

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.count);       // undefined (переменная приватная)
console.log(counter.getCount());  // 1</pre>
          </div>
        </div>
      </div>
      <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl mb-8 border-l-4 border-green-500">
        <h3 class="text-2xl font-semibold mb-4 text-green-800 dark:text-green-300">💡 Практическое задание: Работа с функциями</h3>
        <p class="mb-4">Попробуйте создать и использовать различные типы функций в JavaScript:</p>
        <p class="mb-4">1. Создайте обычную функцию, которая принимает параметры и возвращает результат</p>
        <p class="mb-4">2. Напишите стрелочную функцию для выполнения той же задачи</p>
        <p class="mb-4">3. Создайте функцию с параметрами по умолчанию</p>
        <p class="mb-4">4. Попробуйте использовать функции высшего порядка (например, map, filter, reduce)</p>
        <p class="mb-2">Пример:</p>
        <div class="mb-6">
          <UiCodeEditor />
        </div>
        <p>Экспериментируйте с разными способами объявления функций и их вызова, чтобы лучше понять их работу.</p>
      </div>
    </section>
  </div>
</template>
