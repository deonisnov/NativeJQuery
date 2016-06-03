Node.prototype.after = function (arg) {
    if (typeof arg == 'object'){
        if(!arg.length && !arg.matches('selector')) this.insertAdjacentElement('afterEnd', arg);
        else {
            var self = this;
            var a = function (elem) {
                self.insertAdjacentElement('afterEnd', elem);
            };

            arg.forEach(a)
        }
    } else {
        this.insertAdjacentHTML('afterEnd', arg);
    }
    return this;
};

NodeList.prototype.after = function (arg) {
    var a = function (elem) {
        elem.after(arg);
    };
    this.forEach(a);
    return this;
};