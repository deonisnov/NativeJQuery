// TODO: переписать с bind
Node.prototype.find = function(selector){
    if(selector.indexOf(':selected') + 1){
        var mbSelect;
        var selectors = selector.split(':selected');
        if (!!selectors[0]) mbSelect = this.querySelectorAll(selectors[0]);
        else {
            if(!this.matches('option')) mbSelect = this.parentNode;
            else if(!this.matches('select')) mbSelect = this.find('select');
            else mbSelect = this;
        }
        return mbSelect.find('option')[mbSelect.options.selectedIndex];
    }
    return this.querySelectorAll(selector);
};

NodeList.prototype.find = function(selector){
    if(!this.length) return $('<div/>');
    return this[0].find(selector);
};