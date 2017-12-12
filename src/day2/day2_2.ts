namespace day2_2 {
    
    let fs = require('fs');
    let data = fs.readFileSync('src/day2/input.txt','utf8');

    // test

    // let data = '5	9	2	8'; // 4
    // let data = '9	4	7	3'; // 3
    // let data = '3	8	6	5'; // 2

    function getDivisiblesSum(row) {
        let rowArr = row.split('\t');
        let sum = 0;

        let high;
        let low;
        let temp;
        let match = [];

        for (let i = 0; i < rowArr.length; i++) {
            for (let j = 0; j < rowArr.length; j++) {
                if (Number(rowArr[i]) % Number(rowArr[j]) === 0 && Number(rowArr[i]) !== Number(rowArr[j])) {
                    return Number(rowArr[i]) / Number(rowArr[j])
                }
            }  
        }
    }

    function run() {

        let rows = data.split('\r');
        let sum = 0

        for (let i = 0; i < rows.length; i++) {
            sum += getDivisiblesSum(rows[i])
        }

        console.log(sum)

    }

    run()

}