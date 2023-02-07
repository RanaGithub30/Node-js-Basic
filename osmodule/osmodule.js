const os = require('node:os');

// Returns the amount of free system memory in bytes as an integer.
console.log(os.freemem());

// Returns the string path of the current user's home directory.
console.log(os.homedir());

// Returns a string identifying the operating system platform for which the Node.js binary was compiled.
console.log(os.platform());

// Returns the operating system as a string.
console.log(os.release);

// Returns the total amount of system memory in bytes as an integer.
console.log(os.totalmem());