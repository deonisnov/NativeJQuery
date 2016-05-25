NodeList.prototype.addClass = function(className){
	this.forEach(function (elem) {
		elem.addClass(className);
	})
	return this;
}