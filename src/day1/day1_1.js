var day1_1;
(function (day1_1) {
    var fs = require("fs");
    var data = fs.readFileSync('src/day1/input.txt', 'utf8');
    function run() {
        var first;
        var match = 0;
        var temp;
        for (var i = 0; i <= data.length; i++) {
            var number = Number(data[i]);
            if (i === 0) {
                first = Number(data[i]);
            }
            if (Number(data[i]) === temp) {
                match += number;
            }
            if (i === data.length - 1) {
                if (Number(data[i]) === first) {
                    match += first;
                }
            }
            temp = Number(data[i]);
        }
        console.log(match);
    }
    run();
})(day1_1 || (day1_1 = {}));
//# sourceMappingURL=day1_1.js.map