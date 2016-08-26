if(!$) var $ = {};
$.get = function (url, data, callback, async) {
	var x = new XMLHttpRequest();
	x.withCredentials = true;
	x.onreadystatechange = function () {
		if (x.readyState == 4 && x.status == 200) callback(x.responseText);
	};

	if (async === undefined) async = true;

	x.open("GET", url, async);
	x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	x.setRequestHeader('Cache-Control', 'post-check=0,pre-check=0, false');
	x.setRequestHeader('Cache-Control',  'max-age=0, false');
	x.setRequestHeader('Pragma', 'no-cache');
	x.setRequestHeader('Cache-Control', 'no-cache, must-revalidate');
	x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

	x.send(body);
};

$.post = function (url, data, callback, async) {
	var x = new XMLHttpRequest();
	x.withCredentials = true;
	x.onreadystatechange = function () {
		if (x.readyState == 4 && x.status == 200) callback(JSON.parse(x.responseText));
	};

	if (async === undefined) async = true;

	var k, body = [];
	for(k in data){
		if (typeof data[k] == 'object'){
			body.push(k + '=' + encodeURIComponent(JSON.stringify(data[k])));
		}else{
			body.push(k + '=' + encodeURIComponent(data[k]));
		}
	}
	body = body.join('&');

	x.open("POST", url, async);
	x.setRequestHeader('Cache-Control', 'post-check=0,pre-check=0, false');
	x.setRequestHeader('Cache-Control',  'max-age=0, false');
	x.setRequestHeader('Pragma', 'no-cache');
	x.setRequestHeader('Cache-Control', 'no-cache, must-revalidate');

	x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	x.setRequestHeader('Accept', 'application/json');
	x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

	x.send(body);
};

// commonjs
if( typeof exports === 'object' )  module.exports = $;
