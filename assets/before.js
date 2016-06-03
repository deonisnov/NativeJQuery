Node.prototype.before = function (arg) {
    return this.insert('beforeBegin', arg);
};

NodeList.prototype.before = function (arg) {
    var a = function (elem) {
        elem.before(arg);
    };
    this.forEach(a);
    return this;
};