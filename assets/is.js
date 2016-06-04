Node.prototype.is = HTMLElement.prototype.matches;

NodeList.prototype.is = function (selector) {
    var a = function (elem) {
        return elem.is(selector);
    };

    return this.some(a);
};