// Import Node.js OS module
const os = require('os');

// Display platform
console.log("Platform:", os.platform());

// Memory information
console.log("Total memory:", os.totalmem());
console.log("Free memory:", os.freemem());

// Directory information
console.log("Home directory:", os.homedir());
console.log("Temporary directory:", os.tmpdir());

// System uptime
console.log("Uptime:", os.uptime(), "seconds");

// CPU information
console.log("CPU Info:", os.cpus());

// OS details
console.log("OS Type:", os.type());
console.log("OS Architecture:", os.arch());
