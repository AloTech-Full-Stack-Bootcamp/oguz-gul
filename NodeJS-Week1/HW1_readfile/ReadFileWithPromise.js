//NODE.JS fsPromises.readfile() Method

// initialize file system
const fs = require('fs');
//Initialize file system with promises
const fsPromise = require('fs').promises;

fs.promises.readFile("./file.txt")
.then(function(result) {
    console.log(result)
}).catch(function(error){
    console.log(error)
})


//How to operate callback-based fs.readFile() method with promises in Node.js?
// Importing File System and Utilities module
const fs1 = require('fs');
const util = require('util')

// Convert callback based methods to
// promise based methods
const readFileContent = util.promisify(fs.readFile)

// The readFileContent() method reads the file
// and returns buffer form of the data 
readFileContent('./file.txt')
// If promise resolved and datas are read 
.then(buff => {
  const contents = buff.toString()
  console.log(`\nContents of the file :\n${contents}`)
})
  
// If promise get rejected
.catch(err => {
   console.log(`Error occurs, Error code -> ${err.code}, 
   Error No -> ${err.errno}`);
});

//Implementing the same functionality using async-await.

// Importing File System and Utilities module
const fs = require('fs')
const util = require('util')
  
// Convert callback based methods to
// promise based methods
const readFileContent = util.promisify(fs.readFile)
  
const fetchFile = async (path) => {
    
  // The readFileContent() method reads the file
  // and returns buffer form of the data 
  const buff = await readFileContent(path)
    
  const contents = buff.toString()
  console.log(`\nContents of the file :\n${contents}`)
}
   
fetchFile('./file.txt')
  
// If promise get rejected
.catch(err => {
   console.log(`Error Occurs, Error code -> ${err.code}, 
   Error NO -> ${err.errno}`);
});