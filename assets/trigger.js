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
    for (var i = this.length - 1; i >= 0; i--) this[i].trigger(eventName);

    return this;
};