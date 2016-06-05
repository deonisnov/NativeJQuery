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
    return this.each(function () {
        this.trigger(eventName);
    });
};