Node.prototype.prepend = function (arg) {
    return this.insert('afterBegin', arg);
};

NodeList.prototype.prepend = function (arg) {
    var a = function (elem) {
        elem.prepend(arg);
    };

    for (var i = this.length - 1; i >= 0; i--) a(this[i]);

    return this;
};