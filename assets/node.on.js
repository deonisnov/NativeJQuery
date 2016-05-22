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
}