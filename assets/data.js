Node.prototype.data = function(dataName, value){
    if(dataName === undefined) return this.dataset;
    if(value === undefined) return this.dataset[dataName.toCamelCase()];
    this.dataset[dataName.toCamelCase()] = value;
    return this;
};

NodeList.prototype.data = function(){
    if(arguments.length < 2) return this[0].data(arguments);

    return this.each(function () {
        this.data(arguments);
    });
};