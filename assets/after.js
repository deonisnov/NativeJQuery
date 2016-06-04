Node.prototype.after = function (arg) {
    return this.insert('afterEnd', arg);
};

NodeList.prototype.after = function (arg) {
    for (var i = this.length - 1; i >= 0; i--) {
        this[i].insert('afterEnd', arg);
    }

    return this;
};