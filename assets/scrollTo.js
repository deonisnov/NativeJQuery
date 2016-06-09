Node.prototype.scrollTo = function (pos, duration) {
    if(typeof pos == 'string'){
        var node = $(pos);
        pos = node.scrollTop || node[0].scrollTop;
    } 
    var self = this;
    duration = duration || 1000;
    var S = pos - this.scrollTop;
    var speed = Math.ceil(S/duration)*4 || 1;
    var steps = Math.ceil(S/speed);

    var scr = setInterval(function () {
        self.scrollTop += speed;

        if((speed > 0 && self.scrollTop >= pos)
            || (speed < 0 && self.scrollTop <= pos)
        ) clearInterval(scr);

    }, Math.ceil(duration/steps));
};