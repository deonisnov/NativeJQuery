Node.prototype.on = window.on = function (name, fn_sub, fn) {
    if(!!fn){
        this.addEventListener(name, function (e) {
            var selector = fn_sub;
            var target = e.target;
            while (target != this) {
                if (target.matches(selector)) {
                    fn.call(target, e);
                    return;
                }
                target = target.parentNode;
            }
        });
    }else{
        this.addEventListener(name, fn_sub);
    }
    return this;
};

// NodeList
NodeList.prototype.on = function () {
    // TODO: .map()?
    var args = arguments;
    this.forEach(function (elem) {
        elem.on.apply(elem, args);
    });
    return this;
};