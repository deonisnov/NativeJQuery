// TODO: DRY
$.get = function (url, callback) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.withCredentials = true;
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url);
    xmlhttp.send();
}

$.post = function (url, data, callback, async) {
    if (async === undefined) async = true;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            callback(xmlhttp.responseText)
        }
    };
    xmlhttp.open("POST", url, async);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.withCredentials = true;

    var body = [];
    for(k in data){
        if (typeof data[k] == 'object'){
            body.push(k + '=' + encodeURIComponent(JSON.stringify(data[k])));
        }else{
            body.push(k + '=' + encodeURIComponent(data[k]));
        }
    }
    body = body.join('&');

    xmlhttp.send(body)
}