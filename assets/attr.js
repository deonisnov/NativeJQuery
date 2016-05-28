Node.prototype.attr = function (attrName, value) {
    if(typeof value == 'undefined') return this.getAttribute(attrName);
    this.setAttribute(attrName,value);
    return this;
};

NodeList.prototype.attr = function (attrName, value) {
    if(typeof value == 'undefined') return this[0].getAttribute(attrName);
    this.forEach(function (elem) {
        elem.attr(attrName, value);
    });
    return this;
}