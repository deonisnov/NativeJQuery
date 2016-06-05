Node.prototype.prepend = NodeList.prototype.prepend = function (arg) {
    return this.insert('afterBegin', arg);
};