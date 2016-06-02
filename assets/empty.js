// Deprecated
Node.prototype.empty = function () {
    return this.html('');
};

NodeList.prototype.empty = function () {
    var a = function (elem) {
        elem.empty();
    };

    this.forEach(a);
    return this;
};