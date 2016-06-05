NodeList.prototype.remove = function () {
    this.each(function () {
        this.remove();
    });
};