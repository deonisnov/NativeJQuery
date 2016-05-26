# NativeJQuery
Хотите пользоваться удобствами JQuery, но при этом думаете о производительности и у вас нет необходимости поддержки IE6?
Тогда эта библиотека для вас.
Делает то же самое, что JQuery и почти так же.

Не использует обертки над нодами, вместо этого расширяет нативные объекты(ноды).

Вряд ли вы когда-либо использовали или будете использовать хотябы половину функций JQuery.
В этой библиотеке реализованы самые нужные. По мере изучения спроса будут добавляться новые.

Скоро вы сможете полнотью перейти на nativeJQuery не переписывая код, достаточно будет просто подключить эту библиотеку вместо той, которую используете.

### Размер
1 118

## Usage
Точно так же, как JQuery
```javascript
var $ = require('native-jquery'); // AMD / CommonJS / Global

$('.superClass') // nodelist

$('.superClass').on('click', function () { /**/ });
$('.superContainer').on('click', '.item',function () { /**/ });

$('div').find('.myClass') // nodeList
$('a').parents('form') // node: <form/>
$('a').append()
$('a').each()


$.get(url, callback);
$.post(url, data,callback);

```
## Install
```
npm i --save native-jquery
```
<script src="native-jquery.js"></script>