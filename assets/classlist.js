Node.prototype.addClass = function(className){
	this.classList.add(className);
	return this;
}

NodeList.prototype.addClass = function(className){
this.forEach(function (elem) {
elem.addClass(className);
})
return this;
}