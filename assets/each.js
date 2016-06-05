NodeList.prototype.each = function (callback) {
    for (var i = this.length - 1; i >= 0; i--) callback.call(this[i]);

    return this;
};

// Надо ли?
Node.prototype.each = function (callback) {
    callback.call(this);
    return this;
};