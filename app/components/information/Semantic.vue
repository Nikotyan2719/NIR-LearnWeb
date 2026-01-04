<script setup lang="ts">
</script>

<template>
  <div class="h-full overflow-y-auto p-6 break-all">
    <h1 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">🏗️ Семантические элементы HTML5</h1>

    <section class="mb-8">
      <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white">🔍 Семантическая разметка</h2>
      <p class="mb-6 text-lg text-gray-700 dark:text-gray-300">
        Семантическая разметка использует теги, которые описывают смысл контента, а не только его внешний вид.
        Это делает код более понятным для разработчиков и поисковых систем, а также улучшает доступность для
        пользователей с ограниченными возможностями.
      </p>

      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8 border-l-4 border-blue-500">
        <h3 class="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-300">❓ Почему важна семантика?</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Доступность</strong>: Скринридеры лучше понимают структуру страницы</li>
          <li><strong>SEO</strong>: Поисковые системы лучше индексируют контент</li>
          <li><strong>Поддержка</strong>: Упрощает разработку и поддержку кода</li>
          <li><strong>Адаптивность</strong>: Упрощает создание отзывчивых макетов</li>
          <li><strong>Международная совместимость</strong>: Улучшает отображение на разных устройствах</li>
        </ul>
      </div>

      <div class="mb-8">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
          <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">🏛️ Структурные элементы</h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-gray-700 dark:text-gray-200">🏷️ Основные теги</h4>
              <ul class="space-y-2 mt-2">
                <li>
                  <code class="text-blue-600 dark:text-blue-400">&lt;header&gt;</code> - шапка сайта или раздела
                  <p class="text-sm text-gray-600 dark:text-gray-400 ml-4 mt-1">Содержит вводную информацию, логотип, навигацию</p>
                </li>
                <li>
                  <code class="text-blue-600 dark:text-blue-400">&lt;nav&gt;</code> - навигационное меню
                  <p class="text-sm text-gray-600 dark:text-gray-400 ml-4 mt-1">Основная навигация по сайту (должен быть только один на странице)</p>
                </li>
                <li>
                  <code class="text-blue-600 dark:text-blue-400">&lt;main&gt;</code> - основное содержимое
                  <p class="text-sm text-gray-600 dark:text-gray-400 ml-4 mt-1">Уникальный контент страницы (должен быть только один на странице)</p>
                </li>
                <li>
                  <code class="text-blue-600 dark:text-blue-400">&lt;article&gt;</code> - независимый контент
                  <p class="text-sm text-gray-600 dark:text-gray-400 ml-4 mt-1">Новость, статья, запись блога, комментарий</p>
                </li>
                <li>
                  <code class="text-blue-600 dark:text-blue-400">&lt;section&gt;</code> - тематическая группа
                  <p class="text-sm text-gray-600 dark:text-gray-400 ml-4 mt-1">Группировка связанного контента</p>
                </li>
                <li>
                  <code class="text-blue-600 dark:text-blue-400">&lt;aside&gt;</code> - боковая панель
                  <p class="text-sm text-gray-600 dark:text-gray-400 ml-4 mt-1">Дополнительная информация, связанная с основным контентом</p>
                </li>
                <li>
                  <code class="text-blue-600 dark:text-blue-400">&lt;footer&gt;</code> - подвал
                  <p class="text-sm text-gray-600 dark:text-gray-400 ml-4 mt-1">Информация об авторе, копирайты, ссылки</p>
                </li>
              </ul>
            </div>

            <div class="mt-6">
              <h4 class="font-semibold text-gray-700 dark:text-gray-200">✨ Дополнительные семантические теги</h4>
              <ul class="space-y-2 mt-2">
                <li><code class="text-blue-600 dark:text-blue-400">&lt;figure&gt;</code> - самостоятельный контент с подписью</li>
                <li><code class="text-blue-600 dark:text-blue-400">&lt;figcaption&gt;</code> - подпись к рисунку</li>
                <li><code class="text-blue-600 dark:text-blue-400">&lt;mark&gt;</code> - выделенный текст</li>
                <li><code class="text-blue-600 dark:text-blue-400">&lt;time&gt;</code> - дата/время</li>
                <li><code class="text-blue-600 dark:text-blue-400">&lt;details&gt;</code> - раскрывающийся блок</li>
                <li><code class="text-blue-600 dark:text-blue-400">&lt;summary&gt;</code> - заголовок для details</li>
                <li><code class="text-blue-600 dark:text-blue-400">&lt;dialog&gt;</code> - диалоговое окно</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">📄 Пример структуры веб-страницы</h3>
          <pre class="text-xs bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="ru"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Мой блог&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- Шапка сайта -->
    &lt;header class="site-header"&gt;
        &lt;div class="logo"&gt;Мой Блог&lt;/div&gt;

        &lt;!-- Основная навигация -->
        &lt;nav aria-label="Основное меню"&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="/"&gt;Главная&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="/about"&gt;О нас&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="/contact"&gt;Контакты&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;

        &lt;!-- Поиск по сайту -->
        &lt;form role="search" aria-label="Поиск по сайту"&gt;
            &lt;input type="search" placeholder="Поиск..."&gt;
            &lt;button type="submit"&gt;Найти&lt;/button&gt;
        &lt;/form&gt;
    &lt;/header&gt;

    &lt;!-- Основное содержимое -->
    &lt;main&gt;
        &lt;!-- Хлебные крошки -->
        &lt;nav aria-label="Хлебные крошки" class="breadcrumbs"&gt;
            &lt;ol&gt;
                &lt;li&gt;&lt;a href="/">Главная&lt;/a>&lt;/li&gt;
                &lt;li&gt;&lt;a href="/blog">Блог&lt;/a>&lt;/li&gt;
                &lt;li&gt;Название статьи&lt;/li&gt;
            &lt;/ol&gt;
        &lt;/nav&gt;

        &lt;!-- Основная статья -->
        &lt;article class="blog-post"&gt;
            &lt;header&gt;
                &lt;h1&gt;Название статьи&lt;/h1&gt;
                &lt;p&gt;Автор: &lt;a href="/authors/john"&gt;Иван Иванов&lt;/a&gt;&lt;/p&gt;
                &lt;time datetime="2023-10-15T14:30:00+03:00"&gt;15 октября 2023&lt;/time&gt;
            &lt;/header&gt;

            &lt;section class="post-content"&gt;
                &lt;p&gt;Введение в статью...&lt;/p&gt;

                &lt;figure&gt;
                    &lt;img src="/images/post-image.jpg" alt="Описание изображения"&gt;
                    &lt;figcaption&gt;Подпись к изображению&lt;/figcaption&gt;
                &lt;/figure&gt;

                &lt;p&gt;Основной текст статьи...&lt;/p&gt;

                &lt;blockquote&gt;
                    &lt;p&gt;Цитата из другого источника.&lt;/p&gt;
                    &lt;cite&gt;— Автор цитаты&lt;/cite&gt;
                &lt;/blockquote&gt;
            &lt;/section&gt;

            &lt;footer class="post-footer"&gt;
                &lt;div class="tags"&gt;
                    &lt;span&gt;Теги:&lt;/span&gt;
                    &lt;ul&gt;
                        &lt;li&gt;&lt;a href="/tag/html" rel="tag"&gt;HTML&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="/tag/css" rel="tag"&gt;CSS&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="/tag/web" rel="tag"&gt;Веб-разработка&lt;/a&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;

                &lt;div class="post-navigation"&gt;
                    &lt;a href="/blog/previous-post" rel="prev"&gt;← Предыдущая статья&lt;/a&gt;
                    &lt;a href="/blog/next-post" rel="next"&gt;Следующая статья →&lt;/a&gt;
                &lt;/div&gt;
            &lt;/footer&gt;
        &lt;/article&gt;

        &lt;!-- Секция комментариев -->
        &lt;section class="comments" aria-label="Комментарии"&gt;
            &lt;h2&gt;Комментарии (3)&lt;/h2&gt;

            &lt;article class="comment" id="comment-1"&gt;
                &lt;footer class="comment-meta"&gt;
                    &lt;img src="/avatars/user1.jpg" alt="Аватар пользователя" class="avatar"&gt;
                    &lt;span class="author"&gt;Алексей Петров&lt;/span&gt;
                    &lt;time datetime="2023-10-16T10:30:00+03:00"&gt;16 октября 2023, 10:30&lt;/time&gt;
                &lt;/footer&gt;
                &lt;div class="comment-content"&gt;
                    &lt;p&gt;Отличная статья, спасибо!&lt;/p&gt;
                &lt;/div&gt;
                &lt;a href="#comment-1" class="comment-reply"&gt;Ответить&lt;/a&gt;
            &lt;/article&gt;

            &lt;!-- Форма добавления комментария -->
            &lt;form class="comment-form"&gt;
                &lt;h3&gt;Оставить комментарий&lt;/h3&gt;
                &lt;div class="form-group"&gt;
                    &lt;label for="comment-name"&gt;Имя&lt;/label&gt;
                    &lt;input type="text" id="comment-name" required&gt;
                &lt;/div&gt;
                &lt;div class="form-group"&gt;
                    &lt;label for="comment-email"&gt;Email (не публикуется)&lt;/label&gt;
                    &lt;input type="email" id="comment-email" required&gt;
                &lt;/div&gt;
                &lt;div class="form-group"&gt;
                    &lt;label for="comment-text"&gt;Комментарий&lt;/label&gt;
                    &lt;textarea id="comment-text" required&gt;&lt;/textarea&gt;
                &lt;/div&gt;
                &lt;button type="submit"&gt;Отправить комментарий&lt;/button&gt;
            &lt;/form&gt;
        &lt;/section&gt;
    &lt;/main&gt;

    &lt;!-- Боковая панель -->
    &lt;aside class="sidebar"&gt;
        &lt;section class="widget"&gt;
            &lt;h2&gt;О блоге&lt;/h2&gt;
            &lt;p&gt;Этот блог посвящен веб-разработке и дизайну.&lt;/p&gt;
        &lt;/section&gt;

        &lt;section class="widget"&gt;
            &lt;h2&gt;Категории&lt;/h2&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="/category/html"&gt;HTML&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="/category/css"&gt;CSS&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="/category/javascript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/section&gt;

        &lt;section class="widget"&gt;
            &lt;h2&gt;Архив&lt;/h2&gt;
            &lt;details&gt;
                &lt;summary&gt;2023&lt;/summary&gt;
                &lt;ul&gt;
                    &lt;li&gt;&lt;a href="/2023/10"&gt;Октябрь (5)&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href="/2023/09"&gt;Сентябрь (3)&lt;/a&gt;&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/details&gt;
        &lt;/section&gt;
    &lt;/aside&gt;

    &lt;!-- Подвал сайта -->
    &lt;footer class="site-footer"&gt;
        &lt;div class="footer-widgets"&gt;
            &lt;section&gt;
                &lt;h3&gt;О нас&lt;/h3&gt;
                &lt;p&gt;Мы создаем качественный контент о веб-разработке.&lt;/p&gt;
            &lt;/section&gt;

            &lt;section&gt;
                &lt;h3&gt;Контакты&lt;/h3&gt;
                &lt;address&gt;
                    Email: &lt;a href="mailto:info@example.com"&gt;info@example.com&lt;/a&gt;&lt;br&gt;
                    Телефон: &lt;a href="tel:+71234567890"&gt;+7 (123) 456-78-90&lt;/a&gt;
                &lt;/address&gt;
            &lt;/section&gt;

            &lt;section&gt;
                &lt;h3&gt;Соцсети&lt;/h3&gt;
                &lt;ul class="social-links"&gt;
                    &lt;li&gt;&lt;a href="https://twitter.com/example" rel="noopener noreferrer"&gt;Twitter&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href="https://facebook.com/example" rel="noopener noreferrer"&gt;Facebook&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href="https://github.com/example" rel="noopener noreferrer"&gt;GitHub&lt;/a&gt;&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/section&gt;
        &lt;/div&gt;

        &lt;div class="copyright"&gt;
            &lt;p&gt;&copy; 2023 Мой Блог. Все права защищены.&lt;/p&gt;
            &lt;nav aria-label="Дополнительные ссылки"&gt;
                &lt;ul&gt;
                    &lt;li&gt;&lt;a href="/privacy"&gt;Политика конфиденциальности&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href="/terms"&gt;Условия использования&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href="/sitemap"&gt;Карта сайта&lt;/a&gt;&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/nav&gt;
        &lt;/div&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
        </div>
      </div>

      <div class="grid gap-6 mb-8">
        <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-l-4 border-green-500">
          <h3 class="text-2xl font-semibold mb-4 text-green-800 dark:text-green-300">✨ Преимущества семантической разметки</h3>

          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-green-700 dark:text-green-200">Для пользователей</h4>
              <ul class="list-disc pl-6 mt-2 space-y-1">
                <li>Улучшенная доступность для людей с ограниченными возможностями</li>
                <li>Более предсказуемое поведение при навигации с клавиатуры</li>
                <li>Лучшая поддержка в мобильных устройствах</li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold text-green-700 dark:text-green-200">Для разработчиков</h4>
              <ul class="list-disc pl-6 mt-2 space-y-1">
                <li>Более понятная и поддерживаемая структура кода</li>
                <li>Упрощение стилизации с помощью CSS</li>
                <li>Упрощение автоматического тестирования</li>
                <li>Более легкая командная работа</li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold text-green-700 dark:text-green-200">Для бизнеса</h4>
              <ul class="list-disc pl-6 mt-2 space-y-1">
                <li>Улучшенное SEO (поисковая оптимизация)</li>
                <li>Более высокая скорость индексации</li>
                <li>Увеличение аудитории за счет лучшей доступности</li>
                <li>Снижение стоимости поддержки и развития</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border-l-4 border-yellow-500">
          <h3 class="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-300">🏆 Лучшие практики</h3>

          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-yellow-700 dark:text-yellow-200">Структура документа</h4>
              <ul class="list-decimal pl-6 mt-2 space-y-1 text-sm">
                <li>Используйте <code>&lt;main&gt;</code> только один раз на странице</li>
                <li>Включайте только один <code>&lt;h1&gt;</code> на страницу</li>
                <li>Соблюдайте иерархию заголовков (не пропускайте уровни)</li>
                <li>Группируйте связанные элементы с помощью <code>&lt;section&gt;</code></li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold text-yellow-700 dark:text-yellow-200">Доступность</h4>
              <ul class="list-decimal pl-6 mt-2 space-y-1 text-sm">
                <li>Добавляйте атрибуты <code>alt</code> для изображений</li>
                <li>Используйте <code>aria-*</code> атрибуты для сложных виджетов</li>
                <li>Обеспечьте достаточный цветовой контраст</li>
                <li>Проверяйте навигацию с клавиатуры</li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold text-yellow-700 dark:text-yellow-200">Совместимость</h4>
              <ul class="list-decimal pl-6 mt-2 space-y-1 text-sm">
                <li>Проверяйте в разных браузерах</li>
                <li>Используйте полифилы при необходимости</li>
                <li>Проверяйте валидность разметки с помощью <a href="https://validator.w3.org/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-400">валидатора W3C</a></li>
                <li>Тестируйте с разными размерами экрана</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl mb-8 border-l-4 border-purple-500">
        <h3 class="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-300">💡 Дополнительные рекомендации</h3>

        <div class="grid gap-6">
          <div>
            <h4 class="font-semibold text-purple-700 dark:text-purple-200 mb-2">Микроразметка Schema.org</h4>
            <p class="mb-2">Используйте микроразметку для улучшения отображения в поисковой выдаче:</p>
            <pre class="text-xs bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto"><code>&lt;article itemscope itemtype="https://schema.org/Article"&gt;
  &lt;h1 itemprop="headline"&gt;Заголовок статьи&lt;/h1&gt;
  &lt;div itemprop="author" itemscope itemtype="https://schema.org/Person"&gt;
    Автор: &lt;span itemprop="name"&gt;Иван Иванов&lt;/span&gt;
  &lt;/div&gt;
  &lt;time datetime="2023-10-15" itemprop="datePublished"&gt;15 октября 2023&lt;/time&gt;
  &lt;div itemprop="articleBody"&gt;
    &lt;p&gt;Содержание статьи...&lt;/p&gt;
  &lt;/div&gt;
&lt;/article&gt;</code></pre>
          </div>

          <div>
            <h4 class="font-semibold text-purple-700 dark:text-purple-200 mb-2">ARIA-роли</h4>
            <p class="mb-2">Дополните семантику с помощью ARIA:</p>
            <pre class="text-xs bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto"><code>&lt;!-- Навигация с ARIA --&gt;
&lt;nav role="navigation" aria-label="Основное меню"&gt;
  &lt;ul role="menubar"&gt;
    &lt;li role="none"&gt;
      &lt;a href="/" role="menuitem" aria-current="page"&gt;Главная&lt;/a&gt;
    &lt;/li&gt;
    &lt;li role="none"&gt;
      &lt;a href="/about" role="menuitem"&gt;О нас&lt;/a&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;

<!-- Диалоговое окно с ARIA -->
&lt;button aria-expanded="false" aria-controls="modal"&gt;
  Открыть модальное окно
&lt;/button&gt;
&lt;div id="modal" role="dialog" aria-labelledby="modal-title" hidden&gt;
  &lt;h2 id="modal-title"&gt;Заголовок модального окна&lt;/h2&gt;
  &lt;p&gt;Содержимое модального окна...&lt;/p&gt;
  &lt;button aria-label="Закрыть"&gt;×&lt;/button&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div>
      </div>

      <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500">
        <h3 class="text-2xl font-semibold mb-4 text-red-800 dark:text-red-300">❌ Частые ошибки</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>Использование <code>&lt;div&gt;</code> вместо семантических тегов без веской причины</li>
          <li>Несоответствие иерархии заголовков (пропуск уровней h1-h6)</li>
          <li>Использование семантических тегов только для стилизации</li>
          <li>Отсутствие альтернативных текстов для изображений</li>
          <li>Игнорирование доступности (a11y) при создании интерактивных элементов</li>
          <li>Избыточное использование ARIA-атрибутов, когда нативные HTML-элементы уже обеспечивают необходимую семантику</li>
          <li>Невалидная вложенность элементов (например, интерактивные элементы внутри интерактивных)</li>
        </ul>
      </div>
    </section>
  </div>
</template>
