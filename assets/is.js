Node.prototype.is = function (selector) {
    return this.matches(selector);
};

NodeList.prototype.is = function (selector) {
    var a = function (elem) {
        return elem.matches(selector);
    };

    return this.some(a);
};

// TODO: Если аргумент нода: содержит ли набор ноду