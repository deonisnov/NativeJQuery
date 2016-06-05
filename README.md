# NativeJQuery
Хотите пользоваться удобствами JQuery, но при этом думаете о производительности и у вас нет необходимости поддержки старых IE?
Тогда эта библиотека для вас.
Делает то же самое, что JQuery и почти так же.

Не использует обертки над нодами, вместо этого расширяет нативные объекты(ноды).

Вряд ли вы когда-либо использовали или будете использовать хотябы половину функций JQuery.
В этой библиотеке реализованы самые нужные. По мере изучения спроса будут добавляться новые.

Скоро вы сможете полнотью перейти на nativeJQuery не переписывая код, достаточно будет просто подключить эту библиотеку вместо той, которую используете.

### Размер
2 895 Б

## Usage
Точно так же, как JQuery!
```javascript
var $ = require('native-jquery'); // AMD / CommonJS / Global

$('.superClass:last :parent') // nodelist

$('.superClass').on('click', function () { /**/ });
$('.superContainer').on('click', '.item',function () { /**/ });

$('div').find('.myClass') // nodeList
$('a').parents('form') // node: <form/>
$('a').append()
$('a').prepend()
$('div').before()
$('div').after()
$('div').insert()
$('a').each()
$('a').attr()
$('a').addClass()
$('a').removeClass()
$('a').toggleClass()
$('<div class="super">Текст</div>') // nodeList
$('div').html()
$('div').text()
$('input, select').val()


$.get(url, callback);
$.post(url, data,callback);

$.extend()
$('div').data()
$('div').css()
$('div').is('.cool');
$('div').trigger('superEvent')
$('div')..after()
$('div')..children()

$.fn
```
## Фишки, которые не доступны обычному JQuery

Привычные методы JQuery можно вызывать на нодах:
```javascript
document.getElementById(Id).addClass()
document.getElementsByTagName(p).each()
```
Кроме того:
```javascript
$('input[type=checkbox]').val()
````
теперь возвращает true или false

##Производительность: 
Скорость выполнения скриптов NativeJQuery в разы выше, чем у JQuery
(Смотрите сравнительные таблицы тестов)

![Image alt](https://github.com/seokirill/nativejquery/raw/descriptions/test/testsimg/1.png)
![Image alt](https://github.com/seokirill/nativejquery/raw/descriptions/test/testsimg/2.png)
![Image alt](https://github.com/seokirill/nativejquery/raw/descriptions/test/testsimg/3.png)
![Image alt](https://github.com/seokirill/nativejquery/raw/descriptions/test/testsimg/4.png)

Наши тесты не претендуют на истинность в последней инстанции, мы ищем объективности. Вы можете протестировать скорость выполнения любым доступным Вам способом.
## Install
```
npm i --save native-jquery
```