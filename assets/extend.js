$.extend = function (o) {
    if(typeof o != 'object') o = {};

    for(var i = 1; i < arguments.length; i++){
        for (propName in arguments[i]){
            o[propName] = arguments[i][propName];
        }
    }
    return o;
};