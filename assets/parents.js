// TODO: while{}?
Node.prototype.parents = function(selector){
    var parent = this.parentNode;
    if (!parent || !parent.matches) return $('<div/>');
    if (parent.matches(selector)) return parent;
    return parent.parents(selector);
};

NodeList.prototype.parents = function (selector) {
    return this[0].parents(selector);
};

HTMLElement.prototype.closest = Node.prototype.parents;
NodeList.prototype.closest = NodeList.prototype.parents;