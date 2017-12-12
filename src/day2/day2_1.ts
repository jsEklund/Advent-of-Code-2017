namespace day2_1 {
    
    let fs = require('fs');
    let data = fs.readFileSync('src/day2/input.txt','utf8');

    // test

    // let data = '5	1	9	5'; // 8
    // let data = '7	5	3'; // 4
    // let data = '2	4	6	8'; // 6

    function getRowDiff(row) {
        let rowArr = row.split('\t');
        let high;
        let low;
        let temp;

        for (let i = 0; i < rowArr.length; i++) {
            temp = Number(rowArr[i]);

            high === undefined ? high = temp : high
            low === undefined ? low = temp : low

            temp > high ? high = temp: high
            temp < low ? low = temp : low
        }

        return high - low;
    }

    function run() {

        let rows = data.split('\r');
        let checksum = 0;

        for (let i = 0; i < rows.length; i++) {
            checksum += getRowDiff(rows[i])
        }

        console.log(checksum)

    }

    run()

}