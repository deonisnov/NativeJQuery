window.test = function () {
    ['jquery-1.12.3', 'jquery-2.2.4', 'jquery-3', 'native-jquery']
        .forEach(function (item) {
            System.import(item + '.js')
                .then(function ($) {
                    console.log(item);
                    $('body').html('');
                    // $('body').append('<p/>') x100
                    var x = 100;
                    var testname = "$('body').append('<p/>') x" + x;
                    console.time(testname);
                    for (var i = 0; i <= x; i++) {
                        $('body').append('<p/>');
                    }
                    console.timeEnd(testname);

                    // $('body').append('<p/>') x1000
                    var x = 1000;
                    var testname = "$('body').append('<p/>') x" + x;
                    console.time(testname);
                    for (var i = 0; i <= x; i++) {
                        $('body').append('<p/>');
                    }
                    console.timeEnd(testname);

                    // $('body').append('<p/>') x10000
                    var x = 10000;
                    var testname = "$('body').append('<p/>') x" + x;
                    console.time(testname);
                    for (var i = 0; i <= x; i++) {
                        $('body').append('<p/>');
                    }
                    console.timeEnd(testname);
                });
        });
}