NodeList.prototype.__proto__ = Array.prototype;

NodeList.prototype.on = function () {
    // TODO: .map()?
    var args = arguments;
    this.forEach(function (elem) {
        elem.on.apply(elem, args);
    });
}
