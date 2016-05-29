# NativeJQuery
Хотите пользоваться удобствами JQuery, но при этом думаете о производительности и у вас нет необходимости поддержки IE6?
Тогда эта библиотека для вас.
Делает то же самое, что JQuery и почти так же.

Не использует обертки над нодами, вместо этого расширяет нативные объекты(ноды).

Вряд ли вы когда-либо использовали или будете использовать хотябы половину функций JQuery.
В этой библиотеке реализованы самые нужные. По мере изучения спроса будут добавляться новые.

Скоро вы сможете полнотью перейти на nativeJQuery не переписывая код, достаточно будет просто подключить эту библиотеку вместо той, которую используете.

### Размер
1 406 Б

## Usage
Точно так же, как JQuery!
```javascript
var $ = require('native-jquery'); // AMD / CommonJS / Global

$('.superClass') // nodelist

$('.superClass').on('click', function () { /**/ });
$('.superContainer').on('click', '.item',function () { /**/ });

$('div').find('.myClass') // nodeList
$('a').parents('form') // node: <form/>
$('a').append()
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
## Install
```
npm i --save native-jquery
```

