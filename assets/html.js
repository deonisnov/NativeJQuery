Node.prototype.html = function (v) {
    if(typeof v == 'undefined') return this.innerHTML;
    this.innerHTML = v;
    return this;
};

NodeList.prototype.html = function (v) {
    if(typeof v == 'undefined') return this[0].innerHTML;

    return this.each(function () {
        this.html(v);
    });
};