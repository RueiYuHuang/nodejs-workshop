function readFile() {
    return new Promise((resolve, reject) => {
        const fs = require('fs');

        fs.readFile('test.txt', 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            // console.log(data); 我應該直接在這console.log還是等回傳再console.log會比較好呢?
            resolve(data);
        });
    });
}


async function asyncReadFile() {
    try {
        // readFile();
        let data = await readFile();
        console.log(data);
    } catch(err) {
        console.error('發生錯誤', err);
    }
    
}

asyncReadFile()


 


