Node.prototype.text = function (v) {
    if(typeof v == 'undefined') return this.innerText;
    this.innerText = v;
    return this;
};

NodeList.prototype.text = function (v) {
    if(typeof v == 'undefined') return this[0].innerText;

    for (var i = this.length - 1; i >= 0; i--) this[i].innerText = v;

    return this;
};