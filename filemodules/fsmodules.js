const fs = require('node:fs');

/*
          Read a file
*/

fs.readFile('demo.txt', 'utf-8', (err, data) => {
        console.log(err, data)
})

/*

*/

const syncread = fs.readFileSync('demo.txt').toString()
console.log(syncread)

/*
    Write file
*/

fs.writeFile('file2.txt', "This is a data for testing 123", ()=>{
         console.log("written successfully");
})


/*

*/

const wtfile2 = fs.writeFileSync('file2.txt', "This is Sync function to write in a file")
console.log(wtfile2)

console.log("Finish Reading First")