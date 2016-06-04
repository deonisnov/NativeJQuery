Node.prototype.before = function (arg) {
    return this.insert('beforeBegin', arg);
};

NodeList.prototype.before = function (arg) {
    for (var i = this.length - 1; i >= 0; i--) this[i].insert('beforeBegin', arg);

    return this;
};