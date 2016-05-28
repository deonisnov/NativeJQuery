// addClass()
Node.prototype.addClass = function(classlist){
	var self = this;
	classlist
		.split(' ')
		.forEach(function (className) {
			self.classList.add(className);
		});
	return this;
};

NodeList.prototype.addClass = function(classList){
	this.forEach(function (elem) {
		elem.addClass(classList);
	});
	return this;
};

// removeClass()
Node.prototype.removeClass = function(classlist){
	var self = this;
	classlist
		.split(' ')
		.forEach(function (className) {
			self.classList.remove(className);
		});
	return this;
};

NodeList.prototype.removeClass = function(classList){
	this.forEach(function (elem) {
		elem.removeClass(classList);
	});
	return this;
};

// toggleClass()
Node.prototype.toggleClass = function(classlist){
	var self = this;
	classlist
		.split(' ')
		.forEach(function (className) {
			self.classList.toggle(className);
		});
	return this;
};

NodeList.prototype.toggleClass = function(classList){
	this.forEach(function (elem) {
		elem.toggleClass(classList);
	});
	return this;
};
