Node.prototype.before = NodeList.prototype.before = function (arg) {
    return this.insert('beforeBegin', arg);
};