Node.prototype.parent = function () {
    return this.parentNode;
};

NodeList.prototype.parent = function () {
    return this[0].parent();
};