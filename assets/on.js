Node.prototype.on = window.on = function (name, fn_sub, fn) {
    if(!!fn){
        var a;
        if(typeof fn_sub == 'string'){
            a = function (e) {
                var selector = fn_sub;
                var target = e.target;
                while (target != this) {
                    if (target.matches(selector)) {
                        fn.call(target, e);
                        return;
                    }
                    target = target.parentNode;
                }
            };
        }else if(typeof fn_sub == 'object'){
            a = function (e) {
                var neededObj = fn_sub;
                var target = e.target;
                while (target != neededObj) {
                    if (target == neededObj) {
                        fn.call(target, e);
                        return;
                    }
                    target = target.parentNode;
                }
            };
        }

        this.addEventListener(name, a);
    }else{
        window.on(name, this, fn_sub);
    }
    return this;
};

// NodeList
NodeList.prototype.on = function () {
    // TODO: .map()?
    var args = arguments;
    var a = function (elem) {
        elem.on.apply(elem, args);
    };
    
    this.forEach(a);
    return this;
};