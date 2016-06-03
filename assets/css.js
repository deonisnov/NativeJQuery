Node.prototype.css = function (styleName, value) {
    if(typeof value == 'undefined') return getComputedStyle(this)[styleName];
    this.style[styleName.toCamelCase()] = value;
    return this;
};

NodeList.prototype.css = function (styleName, value) {
    return this[0].css(styleName, value);
};

// TODO: .data({})