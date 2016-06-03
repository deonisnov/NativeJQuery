Node.prototype.parent = function () {
    return this.parentNode;
};

NodeList.prototype.parent = function () {
    // Deprecated
    if(!this.length) return $.empty();
    return this[0].parentNode;
};