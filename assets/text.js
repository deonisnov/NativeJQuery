Node.prototype.text = function (v) {
    if(typeof v == 'undefined') return this.innerText;
    this.innerText = v;
    return this;
};

NodeList.prototype.text = function (v) {
    if(typeof v == 'undefined') return this[0].innerText;

    var a = function (elem) {
        elem.text(v);
    };
    
    this.forEach(a);
    return this;
};