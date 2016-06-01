Node.prototype.data = function(dataName, value){
    if(typeof dataName == 'undefined') return this.dataset;
    if(typeof value == 'undefined') return this.dataset[dataName.toCamelCase()];
    this.dataset[dataName.toCamelCase()] = value;
    return this;
};

NodeList.prototype.data = function(dataName, value){
    if(typeof dataName == 'undefined') return this[0].dataset;
    if(typeof value == 'undefined') return this[0].dataset[dataName.toCamelCase()];

    var a = function (elem) {
        elem.data(dataName);
    };

    this.forEach(a);
    return this;
};

$.data = function (obj, dataName) {
  return obj[dataName];
};