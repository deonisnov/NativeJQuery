Node.prototype.class = function (action, classlist) {
	if(classlist.indexOf(' ') + 1){
		classlist = classlist.split(' ');
		this.classList[action].apply(this, classlist);
	}else{
		this.classList[action](classlist);
	}

	return this;
};

// addClass()
Node.prototype.addClass = function(classlist){
	return this.class('add', classlist);
};

NodeList.prototype.addClass = function(classList){
	for (var i = this.length - 1; i >= 0; i--) this[i].class('add', classList);
	return this;
};

// removeClass()
Node.prototype.removeClass = function(classlist){
	return this.class('remove', classlist);
};

NodeList.prototype.removeClass = function(classList){
	for (var i = this.length - 1; i >= 0; i--) this[i].class('remove', classList);
	return this;
};

// toggleClass()
Node.prototype.toggleClass = function(classlist){
	return this.class('toggle', classlist);
};

NodeList.prototype.toggleClass = function(classList){
	for (var i = this.length - 1; i >= 0; i--) this[i].class('toggle', classList);
	return this;
};

// hasClass()
Node.prototype.hasClass = function(classlist){
	if(classlist.indexOf(' ') + 1){
		classlist = classlist.split(' ');

		var self = this;
		var a = function (classItem) {
			return self.classList.contains(classItem);
		};

		return classlist.every(a);
	}else{
		return this.classList.contains(classlist);
	}
};

NodeList.prototype.hasClass = function(classList){
	var a = function (el) {
		return el.hasClass(classList);
	};

	this.every(a);
};