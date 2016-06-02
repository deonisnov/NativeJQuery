Node.prototype.data = function(dataName, value){
    if(!this.datasetObj) this.datasetObj = {};
    if(typeof dataName == 'undefined') return this.datasetObj;
    if(typeof value == 'undefined') return this.datasetObj[dataName.toCamelCase()];
    this.datasetObj[dataName.toCamelCase()] = value;
    return this;
};

NodeList.prototype.data = function(dataName, value){
    if(typeof dataName == 'undefined') return this[0].data();
    if(typeof value == 'undefined') return this[0].data(dataName);

    var a = function (elem) {
        elem.data(dataName, value);
    };

    this.forEach(a);
    return this;
};

$.data = function (node, dataName, value) {
    if(!node.dataSecret) node.dataSecret = {};
    if(typeof value == 'undefined') return node.dataSecret[dataName];
    node.dataSecret[dataName] = value;
};