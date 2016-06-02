Node.prototype.insertAfter = function (arg) {
    if (typeof arg == 'object'){
        // TODO: придумать что-то поздравее
        var islen = arg.length;
        var issel = arg.matches('select');
        var isafternode = (!islen || issel);
        if(isafternode) {
            arg.insertAdjacentElement('afterEnd', this);
        }
        else {
            var self = this;
            var a = function (elem) {
                elem.insertAdjacentElement('afterEnd', self);
            };

            arg.forEach(a)
        }
    }
    return this;
};

NodeList.prototype.insertAfter = function (arg) {
    var a = function (elem) {
        elem.insertAfter(arg);
    };

    this.forEach(a);
    return this;
};