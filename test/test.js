System
    .import('native-jquery.js')
    .then(function ($) {
        window.$ = $;
    })

var testings = [
    // 'jquery-1.12.3',
    'jquery-2.2.4',
    'jquery-3',
    'native-jquery'
];

var iter = 5;
window.test = function (testFoo, clear) {
    window.results = {};
    window.results.print = function () {
        this.i = iter;

        if(!this.done){
            for(k in this){
                for(testName in this[k]){
                    this[k][testName] /= this.i;
                }
            }
        }
        this.done = true;
        console.table(this);
    }

    function xx(x) {
        return function (foo) {
            var start = Date.now();
            for (var i = 0; i <= x; i++) {
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

    for(var i = iter; i > 0; i--) {
        testings
            .forEach(function (item) {
                System.import(item + '.js')
                    .then(function ($) {
                        if(!results[item])results[item] = {};

                        ////////////
                        if(!!clear)$('body').html('');
                        var res = xx(100)(testFoo)

                        if(!results[item][res.testname]) results[item][res.testname] = 0;
                        results[item][res.testname] += res.time;


                        ////////////
                        if(!!clear)$('body').html('');
                        var res = xx(1000)(testFoo)

                        if(!results[item][res.testname]) results[item][res.testname] = 0;
                        results[item][res.testname] += res.time;

                        ////////////
                        if(!!clear)$('body').html('');
                        var res = xx(10000)(testFoo)

                        if(!results[item][res.testname]) results[item][res.testname] = 0;
                        results[item][res.testname] += res.time;
                    }).then(function () {
                        console.log('test', item, 'done');
                    });
            });
    }
}