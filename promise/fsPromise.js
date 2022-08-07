// const fs = require('fs');  
// const fsPromises = fs.promises; 
  
// fsPromises.readFile('test.txt', 'utf8') 
// .then((data) => { 
//   console.log(data); 
// }) 
// .catch((err) => { 
//    console.log('發生錯誤',err); 
// }) 

async function asyncReadFile() { 
    const fs = require('fs');  
    const fsPromises = fs.promises;

    try {   
        var data = await fsPromises.readFile('test.txt', 'utf8') 
        console.log(data); 
    } catch (err) { 
        console.log("發生錯誤", err); 
    } 
} 
  
asyncReadFile();






