$.extend = function () {
    var o = {};
    for(k in arguments){
        if(typeof arguments[k] != 'object') arguments[k] = {};
        for (propName in arguments[k]){
            o[propName] = arguments[k][propName];
        }
    }
    return o;
};