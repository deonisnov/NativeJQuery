Node.prototype.append = function (arg) {
    Node.prototype.appendChild.apply(this, $(arg));
    return this;
};

NodeList.prototype.append = function (arg) {
    this.forEach(function (elem) {
        Node.prototype.append.apply(elem, [arg]);
    });
    return this;
};










