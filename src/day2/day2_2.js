var day2_2;
(function (day2_2) {
    var fs = require('fs');
    var data = fs.readFileSync('src/day2/input.txt', 'utf8');
    function getDivisiblesSum(row) {
        var rowArr = row.split('\t');
        var sum = 0;
        var high;
        var low;
        var temp;
        var match = [];
        for (var i = 0; i < rowArr.length; i++) {
            for (var j = 0; j < rowArr.length; j++) {
                if (Number(rowArr[i]) % Number(rowArr[j]) === 0 && Number(rowArr[i]) !== Number(rowArr[j])) {
                    return Number(rowArr[i]) / Number(rowArr[j]);
                }
            }
        }
    }
    function run() {
        var rows = data.split('\r');
        var sum = 0;
        for (var i = 0; i < rows.length; i++) {
            sum += getDivisiblesSum(rows[i]);
        }
        console.log(sum);
    }
    run();
})(day2_2 || (day2_2 = {}));
//# sourceMappingURL=day2_2.js.map