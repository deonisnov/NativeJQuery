Node.prototype.prepend = function (arg) {
    return this.insert('afterBegin', arg);
};

NodeList.prototype.prepend = function (arg) {
    var a = function (elem) {
        elem.prepend(arg);
    };
    this.forEach(a);
    return this;
};