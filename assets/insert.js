Node.prototype.insert = function (where, second) {
    if (typeof second == 'object'){
        if(!arg.length) this.insertAdjacentElement(where, second);
        else {
            var self = this;
            var a = function (elem) {
                self.insertAdjacentElement(where, elem);
            };

            second.forEach(a)
        }
    } else {
        this.insertAdjacentHTML(where, second);
    }
    return this;
};