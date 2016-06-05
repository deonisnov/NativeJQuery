Node.prototype.after = NodeList.prototype.after = function (arg) {
    return this.insert('afterEnd', arg);
};