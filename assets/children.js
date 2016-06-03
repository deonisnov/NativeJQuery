// TODO: ???
HTMLElement.prototype.children = function (selector) {
    selector = selector || '*';
    return this.querySelectorAll(':scope > ' + selector);
};

NodeList.prototype.children = function (selector) {
    if(!this.length) return $.empty();
    return this[0].querySelectorAll(':scope > ' + selector);
};