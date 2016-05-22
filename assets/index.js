var $ = require('./core.js');
require('./node.on');
require('./node.find');
require('./node.parents');
require('./nodeList.on');

/////////// Public
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