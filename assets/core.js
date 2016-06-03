$ = function (arg) {
    // Deprecated
    if(typeof arg == 'object') {
        return arg;
    }

    // Создание на лету
    if(arg.indexOf('<') + 1){
        var div = document.createElement('div');
        div.innerHTML = arg;
        return div.querySelectorAll(':scope > *');
    }

    // Поиск по селектору
    var retn = document.find(arg);
    // Deprecated
    // if(retn.length < 2) return retn[0];
    return retn;
};

// Deprecated
$.empty = function () {
    return $('none');
};

// Плагины
$.fn = Array.prototype;
NodeList.prototype.__proto__ = $.fn;
Node.prototype.__proto__.__proto__ = $.fn;
// Deprecated
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