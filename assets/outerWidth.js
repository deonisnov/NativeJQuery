Node.prototype.outerWidth = function (margin) {
    // TODO: +margin if true
    return this.offsetWidth;
    // clientWidth?
};

NodeList.prototype.outerWidth = function (margin) {
    return this[0].outerWidth(margin);
};