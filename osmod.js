const os = require('os');

console.log(os.platform());
console.log("Total memory: ",os.totalmem());
console.log("Free memory: ",os.freemem());
console.log("Home directory: ",os.homedir());
console.log("Temporary directory: ",os.tmpdir());
console.log("Uptime: ",os.uptime())
console.log("OS Info: ",os.cpus());
console.log("OS Type: ",os.type());
console.log("OS Architecture: ",os.arch());