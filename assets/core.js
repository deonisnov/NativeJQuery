$ = function (arg) {
    // Создание на лету
    if(arg.indexOf('<') + 1){
        $.div.innerHTML = arg;
        return  $.div.querySelectorAll(':scope > *');
    }

    // Поиск по селектору
    var retn = document.find(arg);
    if(retn.length < 2) return retn[0];
    return retn;
};

$.div = document.createElement('div');

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