NodeList.prototype.each = function (callback) {
    this.forEach(function (node) {
        callback.apply(node)
    })
};