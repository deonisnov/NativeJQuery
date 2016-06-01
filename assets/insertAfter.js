Node.prototype.insertAfter = function (arg) {
    if (typeof arg == 'object'){
        if(!arg.length) arg.insertAdjacentElement('afterEnd', this);
        else {
            var self = this;
            var a = function (elem) {
                elem.insertAdjacentElement('afterEnd', self);
            };

            arg.forEach(a)
        }
    }
    return this;
};

NodeList.prototype.insertAfter = function (arg) {
    var a = function (elem) {
        Node.prototype.insertAfter.call(elem, arg);
    };
    this.forEach(a);
    return this;
};