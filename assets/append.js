Node.prototype.append = function (arg) {
    if (typeof arg == 'object'){
        if(!arg.length) this.insertAdjacentElement('beforeEnd', arg);
        else {
            var self = this;
            var a = function (elem) {
                self.insertAdjacentElement('beforeEnd', elem);
            };
            
            arg.forEach(a)
        }
    } else {
        this.insertAdjacentHTML('beforeEnd', arg);
    }
    return this;
};

NodeList.prototype.append = function (arg) {
    var a = function (elem) {
        Node.prototype.append.call(elem, arg);
    };
    this.forEach(a);
    return this;
};