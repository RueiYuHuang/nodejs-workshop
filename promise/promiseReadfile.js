function readFile() {
    return new Promise((resolve, reject) => {
        const fs = require('fs');

        fs.readFile('test.txt', 'utf8', (err, data) => {
            if (err) {
               return reject(err) 
            }
            resolve(data);
        });
    });
}

readFile().then((data) => {
    console.log(data)
}).catch((err) => {
    console.log('發生錯誤',err)
})  


