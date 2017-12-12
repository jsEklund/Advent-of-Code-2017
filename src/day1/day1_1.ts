namespace day1_1 {
    
    let fs = require('fs');
    let data = fs.readFileSync('src/day1/input.txt','utf8');

    // test

    // let data = '1122'; // 3
    // let data = '1111'; // 4
    // let data = '1234'; // 0
    // let data = '91212129;' // 9


    function run() {
        let first;
        let match = 0;
        let temp;

        for (let i = 0; i <= data.length; i++) {
            
            let number = Number(data[i])

            if (i === 0) {
                first = Number(data[i])
            }

            if (Number(data[i]) === temp) {
                match += number
            }

            if (i === data.length-1) {
                if (Number(data[i]) === first) {
                    match += first
                }
            }

            temp = Number(data[i])

        }

        console.log(match)
    }

    run()

}