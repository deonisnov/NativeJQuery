NodeList.prototype.__proto__ = Array.prototype;

$ = function (arg) {
    if(typeof arg == 'object') return arg; // миграция
    // Создание на лету
    if(arg.indexOf('<') + 1){
        var div = document.createElement('div');
        div.innerHTML = arg;
        return div.childNodes;
    }
    return document.querySelectorAll(arg);
}

// commonjs
if( typeof exports === 'object' )  {
    module.exports = $;
}
// AMD module
else if( typeof define === 'function' && define.amd ) {
    define(function () {
        return $;
    });
}