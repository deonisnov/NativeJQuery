Node.prototype.data = function(dataName, value){
    if(typeof dataName == 'undefined') return this.dataset;
    if(typeof value == 'undefined') return this.dataset[dataName.toCamelCase()];
    this.dataset[dataName.toCamelCase()] = value;
    return this;
};

NodeList.prototype.data = function(dataName, value){
    if(arguments.length < 2) return this[0].data(arguments);

    var a = function (elem) {
        elem.data(arguments);
    };

    this.forEach(a);
    return this;
};