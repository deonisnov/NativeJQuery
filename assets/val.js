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

    for (var i = this.length - 1; i >= 0; i--) this[i].value = v;
    
    return this;
};