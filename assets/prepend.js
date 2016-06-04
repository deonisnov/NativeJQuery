Node.prototype.prepend = function (arg) {
    return this.insert('afterBegin', arg);
};

NodeList.prototype.prepend = function (arg) {
    for (var i = this.length - 1; i >= 0; i--) this[i].insert('afterBegin', arg);

    return this;
};