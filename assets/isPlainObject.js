$.isPlainObject = function (obj) {
  if(typeof obj != 'object' || typeof obj.prototype != 'undefined') return false;
  return true;
};