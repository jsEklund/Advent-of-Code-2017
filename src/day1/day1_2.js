var day1_2;
(function (day1_2) {
    var fs = require('fs');
    var data = fs.readFileSync('src/day1/input.txt', 'utf8');
    function run() {
        var first;
        var match = 0;
        var temp;
        var length = data.length;
        var half = length / 2;
        for (var i = 0; i <= length; i++) {
            var number = Number(data[i]);
            var position = i + half;
            var pos = 0;
            var j = 0;
            while (j <= length) {
                if (j == length) {
                    j = 0;
                    continue;
                }
                if (pos === position) {
                    if (Number(data[j]) === Number(data[i])) {
                        match += Number(data[j]);
                        break;
                    }
                    else {
                        break;
                    }
                }
                pos++;
                j++;
            }
        }
        console.log(match);
    }
    run();
})(day1_2 || (day1_2 = {}));
//# sourceMappingURL=day1_2.js.map