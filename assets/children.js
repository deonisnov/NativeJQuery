// Deprecated ??
HTMLElement.prototype.children = function (selector) {
    selector = selector || '*';
    return this.querySelectorAll(':scope > ' + selector);
};

NodeList.prototype.children = function (selector) {
    selector = selector || '*';
    return this[0].querySelectorAll(':scope > ' + selector);
};