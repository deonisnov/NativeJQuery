Node.prototype.css = function (styleName, value) {
    if(value === undefined) return getComputedStyle(this)[styleName.toCamelCase()];
    this.style[styleName.toCamelCase()] = value;
    return this;
};

NodeList.prototype.css = function (styleName, value) {
    if(value === undefined) return this[0].css(styleName);
    return this.each(function () {
        this.css(styleName, value);
    });
};