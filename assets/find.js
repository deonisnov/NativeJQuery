$.reservedSelectors = [
    ':parent',
    ':last'
];

Node.prototype.find = function(selector){
    var retn = this;
    var selectors, k;

    if(selector.indexOf(':') + 1) {
        selectors = selector
            .replace( /:selected/g, ':checked')
            .split(/(:[^checked][^\s:]*)/ig);
        for(k = 0; k < selectors.length; k++){
            // Если не пустой
            if(!!selectors[k]){
                // Если зарезервированный селектор
                if($.reservedSelectors.indexOf(selectors[k]) + 1){
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
};

NodeList.prototype.find = NodeList.prototype.querySelectorAll = function(selector){
    return this[0].find(selector);
};
