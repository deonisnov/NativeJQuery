Node.prototype.is = function (selector) {
    return this.matches(selector);
};

NodeList.prototype.is = function (selector) {
    var a = function (elem) {
        return elem.is(selector);
    };

    return this.some(a);
};