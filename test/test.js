// TODO: юзать нормальные тесты
var testings = [
    'native-jquery',
    'jquery-2.2.4',
    'jquery-3'
];

function xx(x) {
    return function (foo) {
        var start = Date.now();
        for (var i = x; i > 0; i--) {
            foo();
        }
        var end = Date.now();
        var testname = foo.toString().split('\n');
        testname[0] = '';
        testname[testname.length - 1] = '';
        testname = testname.join('') + " x" + x;
        return {
            time: end - start,
            testname: testname
        }
    }
}

var x1 = xx(100000);

var x100 = xx(100);
var x1000 = xx(100);
var x10000 = xx(100);

var iter = 5;
window.test = function (testFoo, clear) {
    window.results = {};
    window.test.print = function () {
        if(!this.done){
            for(k in window.results){
                for(testName in window.results[k]){
                    window.results[k][testName] /= iter;
                }
            }
        }
        this.done = true;
        console.table(window.results);
    }


    for(var i = iter; i > 0; i--) {
        testings
            .forEach(function (item) {
                System.import(item + '.js')
                    .then(function ($) {
                        if(!window.results[item])window.results[item] = {};

                        ////////////
                        if(!!clear)$('body').html('');
                        var res = xx(100)(testFoo)

                        if(!window.results[item][res.testname]) window.results[item][res.testname] = 0;
                        window.results[item][res.testname] += res.time;


                        ////////////
                        if(!!clear)$('body').html('');
                        var res = xx(1000)(testFoo)

                        if(!window.results[item][res.testname]) window.results[item][res.testname] = 0;
                        window.results[item][res.testname] += res.time;

                        ////////////
                        if(!!clear)$('body').html('');
                        var res = xx(10000)(testFoo)

                        if(!window.results[item][res.testname]) window.results[item][res.testname] = 0;
                        window.results[item][res.testname] += res.time;

                    }).then(function () {
                        console.log('test', item, 'done');
                    });
            });
    }
}