// Функция для проверки, является ли текущий браузер Chrome
function isChrome() {
  // Используем userAgent для определения браузера
  var userAgent = navigator.userAgent.toLowerCase();
  return userAgent.indexOf('chrome') > -1;
}

// Функция для открытия сайта через Chrome
function openInChrome(url) {
  // Проверяем, является ли браузер Chrome
  if (!isChrome()) {
    // Если нет, создаем ссылку, которая откроет указанный URL в Chrome
    var chromeUrl = 'googlechrome://' + url;
    // Открываем ссылку
    window.location.href = chromeUrl;
  } else {
    // Если браузер Chrome, просто открываем URL
    window.location.href = url;
  }
}

// Пример использования
var siteUrl = 'https://example.com'; // Замените на ваш URL
openInChrome(siteUrl);
