var day2_1;
(function (day2_1) {
    var fs = require('fs');
    var data = fs.readFileSync('src/day2/input.txt', 'utf8');
    function getRowDiff(row) {
        var rowArr = row.split('\t');
        var high;
        var low;
        var temp;
        for (var i = 0; i < rowArr.length; i++) {
            temp = Number(rowArr[i]);
            high === undefined ? high = temp : high;
            low === undefined ? low = temp : low;
            temp > high ? high = temp : high;
            temp < low ? low = temp : low;
        }
        return high - low;
    }
    function run() {
        var rows = data.split('\r');
        var checksum = 0;
        for (var i = 0; i < rows.length; i++) {
            checksum += getRowDiff(rows[i]);
        }
        console.log(checksum);
    }
    run();
})(day2_1 || (day2_1 = {}));
//# sourceMappingURL=day2_1.js.map