Node.prototype.parents = function(selector){
    var parent = this.parentNode;
    if (!parent || !parent.matches) return undefined;
    if (parent.is(selector)) return parent;
    return parent.parents(selector);
};

NodeList.prototype.parents = function (selector) {
    return this[0].parents(selector);
};