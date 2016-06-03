Node.prototype.appendTo = function (arg) {
    if(typeof arg == 'string') arg = $(arg);
    arg.append(this);
    return this;
};

NodeList.prototype.appendTo = function (arg) {
    var a = function (elem) {
        elem.appendTo(arg);
    };
    this.forEach(a);
    return this;
};