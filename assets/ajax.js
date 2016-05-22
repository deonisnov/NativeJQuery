$.x = new XMLHttpRequest();
$.x.withCredentials = true;
$.x.onreadystatechange = function () {
    $.xcb($.x.responseText);
}

$.get = function (url, callback) {
    $.xcb = callback;
    $.x.open("GET", url);
    $.x.send();
}

$.post = function (url, data, callback, async) {
    if (async === undefined) async = true;

    $.xcb = callback;

    var body = [];
    for(k in data){
        if (typeof data[k] == 'object'){
            body.push(k + '=' + encodeURIComponent(JSON.stringify(data[k])));
        }else{
            body.push(k + '=' + encodeURIComponent(data[k]));
        }
    }
    body = body.join('&');

    $.x.open("POST", url, async);
    $.x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    $.x.send(body)
}