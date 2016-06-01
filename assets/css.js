Node.prototype.css = function (styleName, value) {
    console.log(value);
    if(typeof value == 'undefined') return getComputedStyle(this)[styleName];
    this.style[styleName] = value;
    return this.offsetWidth;
};

NodeList.prototype.css = function (styleName, value) {
    if(!this.length) return this;
    return this[0].css(styleName, value);
};

// TODO: .data({})