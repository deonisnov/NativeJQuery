NodeList.prototype.__proto__ = Array.prototype;

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn_sub, fn) {
    // TODO: оптимизировать
    if(!!fn){
        this.forEach(function (elem) {
            elem.on(name, fn_sub, fn);
        });
    }else{
        this.forEach(function (elem) {
            elem.on(name, fn_sub);
        });
    }
}
