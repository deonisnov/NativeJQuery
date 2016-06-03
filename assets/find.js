Node.prototype.find = function(selector){
    var retn = this;

    if(selector.indexOf(':parent') + 1) {
        var selectors = selector.split(':parent');
        for(var k = 0; k < selectors.length; k++){
            if(!!selectors[k]) retn = retn.find(selectors[k]);
            if(k != (selectors.length - 1))  retn = retn.parent();
        }
        return retn;
    }else{
        if(selector.indexOf(':last') + 1) {
            var selectors = selector.split(':last');
            for(var k = 0; k < selectors.length; k++){
                if(!!selectors[k]) retn = retn.find(selectors[k]);
                if(k != (selectors.length - 1))  retn = retn[retn.length - 1];
            }
            return retn;
        }else{
            retn = this.querySelectorAll(selector);
        }
    }

    return retn;



    // TODO
    // if(selector.indexOf(':selected') + 1){
    //     var mbSelect = this;
    //     var selectors = selector.split(':selected');
    //
    //     if (!!selectors[0]) mbSelect = this.querySelectorAll(selectors[0]);
    //     else {
    //         var iso = this.matches('option');
    //         if(iso){
    //             mbSelect = this.parentNode;
    //         }
    //         else if(!this.matches('select')) mbSelect = this.find('select');
    //         else mbSelect = this;
    //     }
    //     return mbSelect.find('option')[mbSelect.options.selectedIndex];
    // }
    // return this.querySelectorAll(selector);
};

NodeList.prototype.find = function(selector){
    if(!this.length) return $.empty();
    return this[0].find(selector);
};