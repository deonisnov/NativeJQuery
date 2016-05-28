Node.prototype.text = function (v) {
    if(typeof v == 'undefined') return this.innerText;
    this.innerText = v;
    return this;
};

NodeList.prototype.text = function (v) {
    if(typeof v == 'undefined') return this[0].innerText;
    this.forEach(function (elem) {
        elem.text(v);
    })
    return this;
};