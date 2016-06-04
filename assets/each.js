NodeList.prototype.each = function (callback) {
    var a = function (node) {
        callback.apply(node)
    };

    for (var i = this.length - 1; i >= 0; i--) a(this[i]);

    return this;
};

// Надо ли?
Node.prototype.each = function (callback) {
    callback.apply(this);
    return this;
};