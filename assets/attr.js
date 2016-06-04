Node.prototype.attr = function (attrName, value) {
    if(typeof value == 'undefined') return this.getAttribute(attrName);
    this.setAttribute(attrName,value);
    return this;
};

NodeList.prototype.attr = function (attrName, value) {
    if(typeof value == 'undefined') {
        return this[0].getAttribute(attrName);
    }

    for (var i = this.length - 1; i >= 0; i--) this[i].setAttribute(attrName,value);

    return this;
};