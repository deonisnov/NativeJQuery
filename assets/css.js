Node.prototype.css = function (styleName, value) {
    if(typeof value == 'undefined') return getComputedStyle(this)[styleName.toCamelCase()];
    this.style[styleName.toCamelCase()] = value;
    return this;
};

NodeList.prototype.css = function (styleName, value) {
    if(typeof value == 'undefined') return this[0].css(styleName);
    for (var i = this.length - 1; i >= 0; i--) this[i].css(styleName, value);
};