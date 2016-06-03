Node.prototype.after = function (arg) {
    return this.insert('afterEnd', arg);
};

NodeList.prototype.after = function (arg) {
    var a = function (elem) {
        elem.after(arg);
    };
    this.forEach(a);
    return this;
};