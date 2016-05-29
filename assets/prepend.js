Node.prototype.prepend = function (arg) {
    if (typeof arg == 'object'){
        if(!arg.length) this.insertAdjacentElement('afterBegin', arg);
        else {
            var self = this;
            var a = function (elem) {
                self.insertAdjacentElement('afterBegin', elem);
            };

            arg.forEach(a)
        }
    } else {
        this.insertAdjacentHTML('afterBegin', arg);
    }
    return this;
};

NodeList.prototype.prepend = function (arg) {
    var a = function (elem) {
        Node.prototype.prepend.call(elem, arg);
    };
    this.forEach(a);
    return this;
};