Node.prototype.removeAttr = function (attrName) {
    this.removeAttribute(attrName);
    return this;
};

NodeList.prototype.removeAttr = function (attrName) {
    return this.each(function () {
        this.removeAttribute(attrName);
    });
};