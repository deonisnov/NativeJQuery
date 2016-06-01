Node.prototype.attr = function (attrName, value) {
    if(typeof value == 'undefined') {
        if(this.hasOwnProperty('getAttribute')) return this.getAttribute(attrName);
        return null;
    }
    this.setAttribute(attrName,value);
    return this;
};

NodeList.prototype.attr = function (attrName, value) {
    if(typeof value == 'undefined') {
        if(!this.length) return '';
        return this[0].getAttribute(attrName);
    }
    var a = function (elem) {
        elem.attr(attrName, value);
    };
    this.forEach(a);
    return this;
};