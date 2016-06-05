Node.prototype.insert = function (where, second){
    if (typeof second == 'string'){
        this.insertAdjacentHTML(where, second);
    }else{
        if(!second.length) this.insertAdjacentElement(where, second);
        else {
            for (var i = 0; i < second.length; i++) this.insertAdjacentElement(where, second[i]);
        }
    }
    return this;
};

NodeList.prototype.insert = function (where, second){
    if (typeof arg == 'string') {
        this.each(function () {
            this.insert(where, second);
        });
    }else{
        this[0].insert(where, second);
    }

    return this;
};