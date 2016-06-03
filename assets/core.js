$ = function (arg) {
    // Создание на лету
    if(arg.indexOf('<') + 1){
        var div = document.createElement('div');
        div.innerHTML = arg;
        return div.querySelectorAll(':scope > *');
    }

    // Поиск по селектору
    var retn = document.find(arg);
    if(retn.length < 2) return retn[0];
    return retn;
};

// Плагины
$.fn = Array.prototype;
NodeList.prototype.__proto__ = $.fn;
Node.prototype.__proto__.__proto__ = $.fn;

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