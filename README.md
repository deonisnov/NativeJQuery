# NativeJQuery
Хотите пользоваться удобствами JQuery, но при этом думаете о производительности и у вас нет необходимости поддержки netscape?
Тогда эта библиотека для вас.
Делает то же самое, что JQuery и почти так же.

Не использует обертки над нодами, вместо этого добавляет методы нативным объектам(нодам).

Вряд ли вы когда-либо использовали или будете использовать хотябы половину функций JQuery.
В этой библиотеке реализованы самые нужные. По мере изучения спроса будут добавляться новые.

Скоро появится модуль, который позволит полнотью перейти на nativeJQuery не переписывая код, достаточно будет просто подключить эту библиотеку вместо той, которую используете.

### Размер
825 Б

## Usage
Точно так же, как JQuery
```javascript
var $ = require('native-jquery'); // AMD / CommonJS / Global

$('.superClass') // nodelist

$('.superClass').on('click', function () { /**/ });
$('.superContainer').on('click', '.item',function () { /**/ });

myNode.find('.myClass') // nodeList
myInput.parents('form') // node: <form/>

$.get(url, callback);
$.post(url, data,callback);
```
## Install
```
npm i --save native-jquery
```
<script src="native-jquery.js"></script>