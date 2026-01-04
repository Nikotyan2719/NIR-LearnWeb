<script setup lang="ts">
</script>

<template>
  <div class="h-full overflow-y-auto p-6 break-all">
    <h1 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">📝 HTML Формы</h1>

    <section class="mb-8">
      <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white">📋 Формы в HTML</h2>

      <p class="mb-6 text-lg text-gray-700 dark:text-gray-300">
        HTML формы используются для сбора пользовательского ввода и отправки его на сервер.
        Они являются основным способом взаимодействия пользователя с веб-приложением.
      </p>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8 border-l-4 border-blue-500">
        <h3 class="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-300">🔑 Основные концепции</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Элементы управления</strong>: Поля ввода, кнопки, переключатели и т.д.</li>
          <li><strong>Методы отправки</strong>: GET (по умолчанию) и POST</li>
          <li><strong>Кодировка данных</strong>: application/x-www-form-urlencoded, multipart/form-data, text/plain</li>
          <li><strong>Валидация</strong>: На стороне клиента и сервера</li>
          <li><strong>Доступность</strong>: Правильная разметка для скринридеров</li>
        </ul>
      </div>

      <div class="mb-8">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
          <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">✅ Базовая форма с валидацией</h3>
          <pre class="text-xs bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto"><code>&lt;form action="/submit" method="POST" novalidate&gt;
  &lt;div class="form-group mb-4"&gt;
    &lt;label for="username" class="block mb-1 font-medium"&gt;Имя пользователя&lt;/label&gt;
    &lt;input
      type="text"
      id="username"
      name="username"
      required
      minlength="3"
      maxlength="30"
      pattern="[A-Za-z0-9_]+"
      class="w-full p-2 border rounded"
      placeholder="Введите имя пользователя"
    &gt;
    &lt;div class="text-sm text-red-600 mt-1"&gt;Только буквы, цифры и подчеркивания (3-30 символов)&lt;/div&gt;
  &lt;/div&gt;

  &lt;div class="form-group mb-4"&gt;
    &lt;label for="email" class="block mb-1 font-medium"&gt;Email&lt;/label&gt;
    &lt;input
      type="email"
      id="email"
      name="email"
      required
      class="w-full p-2 border rounded"
      placeholder="example@domain.com"
    &gt;
  &lt;/div&gt;

  &lt;div class="form-group mb-4"&gt;
    &lt;label for="password" class="block mb-1 font-medium"&gt;Пароль&lt;/label&gt;
    &lt;input
      type="password"
      id="password"
      name="password"
      required
      minlength="8"
      class="w-full p-2 border rounded"
      placeholder="Не менее 8 символов"
    &gt;
  &lt;/div&gt;

  &lt;div class="form-group mb-4"&gt;
    &lt;label class="inline-flex items-center"&gt;
      &lt;input type="checkbox" name="remember" class="rounded"&gt;
      &lt;span class="ml-2"&gt;Запомнить меня&lt;/span&gt;
    &lt;/label&gt;
  &lt;/div&gt;

  &lt;button
    type="submit"
    class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
  &gt;
    Зарегистрироваться
  &lt;/button&gt;
&lt;/form&gt;</code></pre>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">⌨️ Типы полей ввода</h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-2">🔤 Основные типы</h4>
              <ul class="ml-4 space-y-1 text-sm">
                <li><code>&lt;input type="text"&gt;</code> - текстовое поле (по умолчанию)</li>
                <li><code>&lt;input type="password"&gt;</code> - поле для пароля (скрывает ввод)</li>
                <li><code>&lt;input type="email"&gt;</code> - для email-адресов</li>
                <li><code>&lt;input type="tel"&gt;</code> - для телефонных номеров</li>
                <li><code>&lt;input type="number"&gt;</code> - для числового ввода</li>
                <li><code>&lt;input type="url"&gt;</code> - для веб-адресов</li>
                <li><code>&lt;textarea&gt;...&lt;/textarea&gt;</code> - многострочное текстовое поле</li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-2">Выбор даты и времени</h4>
              <ul class="ml-4 space-y-1 text-sm">
                <li><code>&lt;input type="date"&gt;</code> - выбор даты</li>
                <li><code>&lt;input type="time"&gt;</code> - выбор времени</li>
                <li><code>&lt;input type="datetime-local"&gt;</code> - дата и время</li>
                <li><code>&lt;input type="month"&gt;</code> - месяц и год</li>
                <li><code>&lt;input type="week"&gt;</code> - неделя и год</li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-2">Элементы выбора</h4>
              <ul class="ml-4 space-y-1 text-sm">
                <li><code>&lt;select&gt;&lt;option&gt;...&lt;/option&gt;&lt;/select&gt;</code> - выпадающий список</li>
                <li><code>&lt;input type="checkbox"&gt;</code> - флажок (несколько вариантов)</li>
                <li><code>&lt;input type="radio"&gt;</code> - переключатель (один из многих)</li>
                <li><code>&lt;input type="file"&gt;</code> - загрузка файлов</li>
                <li><code>&lt;input type="color"&gt;</code> - выбор цвета</li>
                <li><code>&lt;input type="range"&gt;</code> - ползунок</li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-2">Специальные кнопки</h4>
              <ul class="ml-4 space-y-1 text-sm">
                <li><code>&lt;button type="submit"&gt;</code> - кнопка отправки</li>
                <li><code>&lt;button type="reset"&gt;</code> - сброс формы</li>
                <li><code>&lt;button type="button"&gt;</code> - обычная кнопка</li>
                <li><code>&lt;input type="image" src="..."&gt;</code> - кнопка-изображение</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="grid gap-6 mb-8">
        <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-2xl font-semibold mb-4 text-green-800 dark:text-green-300">✅ Валидация форм</h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-green-700 dark:text-green-200">Встроенная валидация</h4>
              <ul class="list-disc pl-6 mt-2 space-y-1 text-sm">
                <li><code>required</code> - обязательное поле</li>
                <li><code>minlength="3"</code> - минимальная длина</li>
                <li><code>maxlength="100"</code> - максимальная длина</li>
                <li><code>min="0" max="100"</code> - минимальное/максимальное значение</li>
                <li><code>pattern="[A-Za-z]+"</code> - регулярное выражение</li>
                <li><code>type="email|url|tel|number"</code> - проверка формата</li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold text-green-700 dark:text-green-200">Кастомные сообщения</h4>
              <pre class="text-xs bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto mt-2"><code>const email = document.querySelector('input[type="email"]');

email.addEventListener('invalid', (e) => {
  if (email.validity.valueMissing) {
    email.setCustomValidity('Пожалуйста, введите email');
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity('Введите корректный email');
  } else {
    email.setCustomValidity('');
  }
});</code></pre>
            </div>

            <div>
              <h4 class="font-semibold text-green-700 dark:text-green-200">API валидации</h4>
              <ul class="list-disc pl-6 mt-2 space-y-1 text-sm">
                <li><code>element.checkValidity()</code> - проверка валидности</li>
                <li><code>element.validity</code> - объект с состоянием валидации</li>
                <li><code>element.validationMessage</code> - сообщение об ошибке</li>
                <li><code>element.setCustomValidity('')</code> - установка кастомного сообщения</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border-l-4 border-yellow-500">
          <h3 class="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-300">💡 Методы отправки</h3>

          <div class="mb-6">
            <h4 class="font-semibold text-yellow-700 dark:text-yellow-200 mb-2">Атрибуты формы</h4>
            <ul class="list-disc pl-6 space-y-1 text-sm">
              <li><code>action="URL"</code> - куда отправлять данные</li>
              <li><code>method="GET|POST|PUT|DELETE"</code> - HTTP-метод</li>
              <li><code>enctype="..."</code> - кодировка данных:</li>
              <ul class="list-disc pl-6 mt-1 space-y-1">
                <li><code>application/x-www-form-urlencoded</code> (по умолчанию)</li>
                <li><code>multipart/form-data</code> (для файлов)</li>
                <li><code>text/plain</code> (обычный текст)</li>
              </ul>
              <li><code>target="_blank|_self|_parent|_top"</code> - где открыть ответ</li>
              <li><code>novalidate</code> - отключить встроенную валидацию</li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-yellow-700 dark:text-yellow-200 mb-2">Отправка через JavaScript</h4>
            <pre class="text-xs bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto"><code>// Получение данных формы
const form = document.querySelector('form');
const formData = new FormData(form);

// Отправка с помощью Fetch API
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const result = await response.json();
    console.log('Успех:', result);
  } catch (error) {
    console.error('Ошибка:', error);
  }
});</code></pre>
          </div>
        </div>
      </div>

      <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl mb-8 border-l-4 border-purple-500">
        <h3 class="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-300">🔧 Дополнительные возможности</h3>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-purple-700 dark:text-purple-200 mb-2">Группировка полей</h4>
            <pre class="text-xs bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto"><code>&lt;fieldset&gt;
  &lt;legend&gt;Контактная информация&lt;/legend&gt;

  &lt;div class="form-group"&gt;
    &lt;label for="name"&gt;Имя:&lt;/label&gt;
    &lt;input type="text" id="name" name="name"&gt;
  &lt;/div&gt;

  &lt;div class="form-group"&gt;
    &lt;label for="email"&gt;Email:&lt;/label&gt;
    &lt;input type="email" id="email" name="email"&gt;
  &lt;/div&gt;
&lt;/fieldset&gt;</code></pre>
          </div>

          <div>
            <h4 class="font-semibold text-purple-700 dark:text-purple-200 mb-2">Выпадающий список с поиском</h4>
            <pre class="text-xs bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto"><code>&lt;label for="country"&gt;Страна:&lt;/label&gt;
&lt;input list="countries" id="country" name="country"&gt;
&lt;datalist id="countries"&gt;
  &lt;option value="Россия"&gt;
  &lt;option value="США"&gt;
  &lt;option value="Германия"&gt;
  &lt;option value="Франция"&gt;
  &lt;option value="Китай"&gt;
&lt;/datalist&gt;</code></pre>
          </div>

          <div>
            <h4 class="font-semibold text-purple-700 dark:text-purple-200 mb-2">Кастомные чекбоксы и радиокнопки</h4>
            <pre class="text-xs bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto"><code>&lt;!-- Стилизованный чекбокс --&gt;
&lt;label class="inline-flex items-center"&gt;
  &lt;input type="checkbox" class="form-checkbox"&gt;
  &lt;span class="ml-2"&gt;Я согласен с условиями&lt;/span&gt;
&lt;/label&gt;

/* CSS */
.form-checkbox {
  @apply rounded text-blue-600 focus:ring-blue-500;
}</code></pre>
          </div>

          <div>
            <h4 class="font-semibold text-purple-700 dark:text-purple-200 mb-2">Загрузка файлов</h4>
            <pre class="text-xs bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto"><code>&lt;form enctype="multipart/form-data"&gt;
  &lt;div class="form-group"&gt;
    &lt;label for="avatar"&gt;Аватар:&lt;/label&gt;
    &lt;input
      type="file"
      id="avatar"
      name="avatar"
      accept="image/png, image/jpeg"
      multiple
    &gt;
  &lt;/div&gt;

  &lt;div id="preview" class="mt-2"&gt;&lt;/div&gt;

  &lt;button type="submit"&gt;Загрузить&lt;/button&gt;
&lt;/form&gt;

&lt;script&gt;
document.getElementById('avatar').addEventListener('change', function(e) {
  const preview = document.getElementById('preview');
  preview.innerHTML = '';

  for (const file of this.files) {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    img.className = 'h-20 w-20 object-cover mr-2 mb-2';
    preview.appendChild(img);
  }
});
&lt;/script&gt;</code></pre>
          </div>
        </div>
      </div>

      <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500">
        <h3 class="text-2xl font-semibold mb-4 text-red-800 dark:text-red-300">🔒 Безопасность форм</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>Всегда проверяйте данные на сервере (клиентская валидация небезопасна)</li>
          <li>Используйте CSRF-токены для защиты от подделки межсайтовых запросов</li>
          <li>Ограничивайте размер загружаемых файлов</li>
          <li>Проверяйте MIME-типы загружаемых файлов</li>
          <li>Используйте HTTPS для защиты передаваемых данных</li>
          <li>Экранируйте пользовательский ввод перед выводом на страницу (XSS-атаки)</li>
          <li>Используйте <code>Content-Security-Policy</code> для дополнительной защиты</li>
        </ul>
      </div>
    </section>
  </div>
</template>
