HTMLElement.prototype.animate = function (willProps, duration, easing, callback) {
    if(typeof duration == 'undefined') duration = 1;
    else if(typeof duration == 'string'){
        switch (duration) {
            case 'fast':
                duration = '.3';
                    break;
            case 'normal':
                duration = '1';
                break;
            case 'slow':
                duration = '2';
                break;
        }
    }else{
        duration = duration/1000;
    }

    easing = 'linear';

    // TODO: transform
    var transitions = [];
    for(k in  willProps){
        transitions.push(k + ' ' + duration + 's ' + easing);
    }
    this.style.transition = transitions.join(',');


    // Нормализация
    var normalize = {
        opacity: {
            show: '1',
            hide: '0'
        }
    };

    var valueTmp;
    for(k in  willProps){
        valueTmp = normalize[k][willProps[k]] || willProps[k];
        this.style[k] = valueTmp;
    }
    this.style.display = 'inherit';

    if(callback){
        var self = this;
        setTimeout(function () {
            callback.call(self);
        }, duration*1000);
    }

    return this;
};

NodeList.prototype.animate = function () {
    var args = arguments;
    var a = function (elem) {
        elem.animate(args);
    };

    this.forEach(a);
    return this;
};