Node.prototype.on = window.on = function (name, fn_sub, fn) {
    if(!!fn){
        var a = function (e) {
            var selector = fn_sub;
            var target = e.target;
            while (target != this) {
                if (target.is(selector)) {
                    fn.call(target, e);
                    return;
                }
                target = target.parentNode;
            }
        };

        this.addEventListener(name, a);
    }else{
        this.addEventListener(name, fn_sub);
    }
    return this;
};

// NodeList
NodeList.prototype.on = function () {
    return this.each(function () {
        this.on(arguments);
    });
};