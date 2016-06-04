$.fn = Array.prototype;
NodeList.prototype.__proto__ = $.fn;
Node.prototype.__proto__.__proto__ = $.fn;
