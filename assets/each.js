NodeList.prototype.each = function (callback) {
    for (var i = this.length - 1; i >= 0; i--) callback.apply(this[i])

    return this;
};

// Надо ли?
Node.prototype.each = function (callback) {
    callback.apply(this);
    return this;
};