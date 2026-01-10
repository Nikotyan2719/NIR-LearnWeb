<script setup lang="ts">
</script>

<template>
  <div class="h-full overflow-y-auto p-6 break-all">
    <h1 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">JavaScript Операции</h1>
    <section class="mb-8">
      <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Операции в JavaScript</h2>
      <p class="mb-6 text-lg text-gray-700 dark:text-gray-300">
        JavaScript поддерживает различные типы операций: арифметические, сравнения, логические и другие.
        Понимание этих операций является основой для написания эффективного кода.
      </p>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8 border-l-4 border-blue-500">
        <h3 class="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-300">🔧 Типы операций</h3>
        <p class="mb-4">В JavaScript операции можно разделить на несколько категорий в зависимости от их функциональности.</p>
      </div>

      <div class="space-y-8 mb-8">
        <div>
          <h3 class="text-2xl font-semibold mb-4">➕ Арифметические операции</h3>
          <ul class="space-y-4">
            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">Базовые операции</h4>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">let sum = 5 + 3;      // 8
let difference = 5 - 3; // 2
let product = 5 * 3;    // 15
let quotient = 6 / 2;   // 3
let remainder = 5 % 2;  // 1 (остаток от деления)
let power = 2 ** 3;     // 8 (возведение в степень)</pre>
              </div>
            </li>

            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">Инкремент и декремент</h4>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">let x = 5;
x++;      // x = x + 1
let y = 5;
y--;      // y = y - 1

// Префиксная и постфиксная форма
let a = 5;
let b = a++;  // b = 5, a = 6
let c = 5;
let d = ++c;  // d = 6, c = 6</pre>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-2xl font-semibold mb-4">🔄 Операции сравнения</h3>
          <ul class="space-y-4">
            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">Сравнение чисел</h4>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">5 > 3;    // true
5 < 3;    // false
5 >= 5;   // true
5 <= 4;   // false
5 == '5'; // true (нестрогое сравнение)
5 === '5';// false (строгое сравнение)
5 != '5'; // false (нестрогое неравенство)
5 !== '5';// true (строгое неравенство)</pre>
              </div>
            </li>

            <li class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">Логические операции</h4>
              <div class="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <pre class="text-sm text-gray-800 dark:text-gray-200 overflow-auto">// Логическое И (&&)
true && true;   // true
true && false;  // false

// Логическое ИЛИ (||)
true || false;  // true
false || false; // false

// Логическое НЕ (!)
!true;  // false
!false; // true

// Примеры с условными выражениями
const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log('Можно водить машину');
}

const name = '';
const defaultName = name || 'Гость';
console.log(defaultName); // 'Гость'</pre>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl mb-8 border-l-4 border-yellow-500">
        <h3 class="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-300">⚠️ Особенности JavaScript</h3>
        <p class="mb-4">В JavaScript есть несколько особенностей при работе с операциями:</p>

        <div class="space-y-4">
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">Приведение типов</h4>
            <pre class="text-sm text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto">'5' + 3;      // '53' (конкатенация строк)
'5' - 3;      // 2 (преобразование в числа)
'5' * '2';    // 10 (преобразование в числа)
'5' == 5;     // true (нестрогое сравнение)
'5' === 5;    // false (разные типы)

// Ложные значения (falsy): false, 0, '', null, undefined, NaN
// Все остальные значения приводятся к true</pre>
          </div>

          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h4 class="font-bold text-lg mb-2 text-gray-800 dark:text-white">Оператор нулевого слияния (??)</h4>
            <pre class="text-sm text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto">// Возвращает правый операнд, если левый null или undefined
const value1 = null ?? 'default';  // 'default'
const value2 = 0 ?? 'default';     // 0
const value3 = '' ?? 'default';    // ''

// Полезно для задания значений по умолчанию
const userSettings = null;
const settings = userSettings ?? { theme: 'light' };</pre>
          </div>
        </div>
      </div>
      <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl mb-8 border-l-4 border-green-500">
        <h3 class="text-2xl font-semibold mb-4 text-green-800 dark:text-green-300">💡 Практическое задание: Работа с операторами</h3>
        <p class="mb-4">Попробуйте выполнить различные арифметические и логические операции в JavaScript:</p>
        <p class="mb-4">1. Создайте переменные и выполните арифметические операции (сложение, вычитание, умножение, деление, остаток от деления)</p>
        <p class="mb-4">2. Используйте операторы сравнения (===, !==, &gt;, &lt;, &gt;=, &lt;=) для сравнения значений</p>
        <p class="mb-4">3. Поэкспериментируйте с логическими операторами (&&, ||, !)</p>
        <p class="mb-4">4. Попробуйте использовать тернарный оператор для условного присваивания значений</p>
        <p class="mb-2">Пример:</p>
        <div class="mb-6">
          <UiCodeEditor />
        </div>
        <p>Измените значения переменных и операторы, чтобы лучше понять, как они работают в разных сценариях.</p>
      </div>
    </section>
  </div>
</template>
