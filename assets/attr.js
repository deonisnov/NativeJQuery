Node.prototype.attr = function (attrName, value) {
    if(value === undefined) return this.getAttribute(attrName);
    this.setAttribute(attrName,value);
    return this;
};

NodeList.prototype.attr = function (attrName, value) {
    if(value === undefined) {
        return this[0].getAttribute(attrName);
    }

    return this.each(function () {
        this.setAttribute(attrName,value);
    });
};