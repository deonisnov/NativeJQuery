$ = function (arg) {
    // миграция
    if(typeof arg == 'object' || typeof arg == 'function') {
        var div = document.createElement('div');
        div.append(arg);
        return div.childNodes;
    }

    // Создание на лету
    if(arg.indexOf('<') + 1){
        // TODO: outerHTMl?
        var div = document.createElement('div');
        div.innerHTML = arg;
        return div.childNodes;
    }
    var retn = document.querySelectorAll(arg);
    // if(retn.length < 2) return retn[0];
    return retn;
}; 

// Плагины
$.fn = Array.prototype;
NodeList.prototype.__proto__ = $.fn;
Node.prototype.__proto__.__proto__ = $.fn;
window.jQuery = $;

// commonjs
if( typeof exports === 'object' )  {
    module.exports = $;
}
// AMD module
else if( typeof define === 'function' && define.amd ) {
    define(function () {
        return $;
    });
}else{
    window.$ = $;
}