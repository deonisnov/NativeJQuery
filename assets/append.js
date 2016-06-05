Node.prototype.append = NodeList.prototype.append = function (arg) {
    return this.insert('beforeEnd', arg);
};