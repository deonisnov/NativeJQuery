Node.prototype.data = function(dataName, value){
    if(typeof dataName == 'undefined') return this.dataset;
    if(typeof value == 'undefined') return this.dataset[dataName.toCamelCase()];
    this.dataset[dataName.toCamelCase()] = value;
    return this;
};

NodeList.prototype.data = function(){
    if(arguments.length < 2) return this[0].data(arguments);

    for (var i = this.length - 1; i >= 0; i--) this[i].data(arguments);

    return this;
};