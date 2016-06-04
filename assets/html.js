Node.prototype.html = function (v) {
    if(typeof v == 'undefined') return this.innerHTML;
    this.innerHTML = v;
    return this;
};

NodeList.prototype.html = function (v) {
    if(typeof v == 'undefined') return this[0].innerHTML;

    for (var i = this.length - 1; i >= 0; i--) this[i].html(v);

    return this;
};