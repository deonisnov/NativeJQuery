Node.prototype.trigger = function (eventName) {
    if(eventName in this){
        this[eventName]();
    }else{
        var customEvent = new CustomEvent(eventName);
        this.dispatchEvent(customEvent);
    }
    return this;
};

NodeList.prototype.trigger = function (eventName) {
    this.forEach(function (elem) {
        elem.trigger(eventName);
    });
    return this;
};