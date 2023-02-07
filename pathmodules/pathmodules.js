const path = require('node:path');

//  returns the last portion of a path
console.log(path.basename('C:\\temp\\myfile.html')); // myfile.html

// returns the extension of the path
console.log(path.extname('index.html'));  // .html

// 
console.log(path.extname('index.')); // "."

// 
console.log(path.extname('.index')); // ""