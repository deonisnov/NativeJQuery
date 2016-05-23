Node.prototype.append = function (arg) {
    var self = this;

    function arrAppend(array) {
        array.forEach(function (elem) {
            Node.prototype.appendChild.apply(self, [elem]);
        })
    }

    switch (typeof  arg) {
        case 'object':
            if(arg.hasOwnProperty('length')){ // Массив или NodeList
                arrAppend(arg)
            }else{ // Node
                Node.prototype.appendChild.apply(self, [arg]);
            }
            break;
        case 'string': // Селектор
            arrAppend($(arg));
            break;
    }

    return this;
}

NodeList.prototype.append = function (arg) {
    this.forEach(function (elem) {
        Node.prototype.append.apply(elem, [arg]);
    })
}










