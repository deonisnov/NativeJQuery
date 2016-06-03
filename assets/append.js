Node.prototype.append = function (arg) {
    return this.insert('beforeEnd', arg);
};

NodeList.prototype.append = function (arg) {
    var a = function (elem) {
        elem.append(arg);
    };
    this.forEach(a);
    return this;
};