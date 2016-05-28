Node.prototype.val = function (v) {
    if(typeof v == 'undefined') return this.value;
    this.value = v;
    return this;
};

NodeList.prototype.val = function (v) {
    if(typeof v == 'undefined') {
        if(this[0].type == 'checkbox') return this[0].checked;
        return this[0].value;
    }
    this.forEach(function (elem) {
        elem.value = v;
    });
    return this;
};