Node.prototype.val = function (v) {
    if(typeof v == 'undefined') {
        if(this.type == 'checkbox') return this.checked;
        return this.value;
    }
    this.value = v;
    return this;
};

NodeList.prototype.val = function (v) {
    if(typeof v == 'undefined') return this[0].val();

    var a = function (elem) {
        elem.val(v);
    };

    this.forEach(a);
    return this;
};