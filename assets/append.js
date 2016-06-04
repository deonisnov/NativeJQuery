// TODO: appendChild()
Node.prototype.append = function (arg) {
    return this.insert('beforeEnd', arg);
};

NodeList.prototype.append = function (arg) {
    for (var i = this.length - 1; i >= 0; i--) this[i].insert('beforeEnd', arg);

    return this;
};