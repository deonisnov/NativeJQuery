// TODO: переписать с bind
Node.prototype.find = function(selector){
    return this.querySelectorAll(selector);
}