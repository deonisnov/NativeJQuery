NodeList.prototype.each = function (callback) {
    var a = function (node) {
        callback.apply(node)
    };

    this.forEach(a);
    return this;
};