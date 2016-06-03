Node.prototype.bind = function (event, callback) {
    this.on(event,callback);
    return this;
};

NodeList.prototype.bind = function (event, callback) {
    var a = function (elem) {
        elem.bind(event, callback);
    };

    this.forEach(a);
    return this;
};