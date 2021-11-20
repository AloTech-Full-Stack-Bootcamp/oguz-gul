// initialize file system
const fs = require('fs');


//This readfile method has callback with Async
//Code for reading a file asynchronously(non-blocking code) in Node.js
fs.readFile('./file.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(`File is rejected: ${err}`);
    }
     console.log(data);
     console.log('File is resolve')
})


//This readfile method hasn't callback with Sync
//Code for reading a file synchronously (blocking-code) in Node.js
const fileData = fs.readFileSync('./file.txt' ,'utf-8');

try {
    console.log(fileData.toString())
} catch (error) {
    console.log("End of program exucution")
}