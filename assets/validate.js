HTMLFormElement.prototype.validate = function (checkFoo) {
    checkFoo = checkFoo || function () {return true};
    this.valid = (checkFoo.call(this) && this.checkValidity());
    return this;
};

HTMLFormElement.prototype.then = function (thenFoo) {
    if(this.valid) thenFoo.call(this);
};