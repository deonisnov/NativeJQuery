$.extend = function (o) {
    if(typeof o != 'object') o = {};

    for(var i = 1; i < arguments.length; i++){
        var keys = Object.keys(arguments[i]);
        for (var j = keys.length - 1; j >= 0; j--)
            o[keys[j]] = arguments[i][keys[j]];
    }
    return o;
};