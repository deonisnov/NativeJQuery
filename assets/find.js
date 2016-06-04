$.reservedSelectors = [
    ':parent',
    ':last'
];

Node.prototype.find = function(selector){
    var retn = this;
    var selectors, k;

    if(selector.indexOf(':') + 1) {
        selectors = selector.split(/(:[^\s:]*)/ig);
        for(k = 0; k < selectors.length; k++){
            // Если не пустой
            if(!!selectors[k]){
                // Если зарезервированный селектор
                if($.reservedSelectors.indexOf(selectors[k])){
                    retn = retn[selectors[k].slice(1)]();
                }// Иначе просто ищем
                else{
                    retn = retn.querySelectorAll(selectors[k]);
                }
            }
        }
    }else{
        retn = retn.querySelectorAll(selector);
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
    return this[0].find(selector);
};