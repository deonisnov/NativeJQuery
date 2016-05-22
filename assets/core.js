var $ = document.querySelectorAll.bind(document);

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
// Browser global
else {
    window.$ = $;
}