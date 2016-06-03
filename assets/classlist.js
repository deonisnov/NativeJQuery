// addClass()
Node.prototype.addClass = function(classlist){
	var self = this;
	var a = function (className) {
		self.classList.add(className);
	};

	// TODO: потестить с проверкой .indexOf(' ')
	classlist
		.split(' ')
		.forEach(a);
	return this;
};

NodeList.prototype.addClass = function(classList){
	var a = function (elem) {
		elem.addClass(classList);
	};

	this.forEach(a);
	return this;
};

// removeClass()
Node.prototype.removeClass = function(classlist){
	var self = this;
	var a = function (className) {
		self.classList.remove(className);
	};

	classlist
		.split(' ')
		.forEach(a);
	return this;
};

NodeList.prototype.removeClass = function(classList){
	var a = function (elem) {
		elem.removeClass(classList);
	};
	this.forEach(a);
	return this;
};

// toggleClass()
Node.prototype.toggleClass = function(classlist){
	var self = this;
	var a = function (className) {
		self.classList.toggle(className);
	};

	classlist
		.split(' ')
		.forEach(a);
	return this;
};

NodeList.prototype.toggleClass = function(classList){
	var a = function (elem) {
		elem.toggleClass(classList);
	};

	this.forEach(a);
	return this;
};