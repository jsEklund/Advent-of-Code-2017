namespace day1_2 {
    
    let fs = require('fs');
    let data = fs.readFileSync('src/day1/input.txt','utf8');
    
    // test
    
    // let data = '1212'; // 6
    // let data = '1221'; // 0
    // let data = '123425'; // 4
    // let data = '123123'; // 12
    // let data = '12131415'; // 4

    function run() {
        let first;
        let match = 0;
        let temp;
        let length = data.length
        let half = length / 2

        for (let i = 0; i <= length; i++) {

            let number = Number(data[i])
            let position = i + half;
            let pos = 0;
            let j = 0;

            while (j <= length) {
    
                if(j == length) {
                    j = 0;
                    continue;
                }
    
                if (pos === position) {

                    if (Number(data[j]) === Number(data[i])) {
                        match += Number(data[j])
                        break;

                    } else {
                        break;
                    }
                }

                pos++
                j++
    
            }

        }

        console.log(match)
    }

    run()

}