// TODO: while{}?
Node.prototype.parents = function(selector){
    var parent = this.parentNode;
    if (!parent) return null;
    if (parent.matches(selector)) return parent;
    return parent.parents(selector);
}