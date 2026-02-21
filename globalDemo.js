// Node.js Global Variables
console.log("__dirname:", __dirname);   // Full path of folder where this file is
console.log("__filename:", __filename); // Full path of this file

// Logging
console.log("Hello World");            // Normal log
console.error("This is an error");     // Error log
console.warn("This is a warning");     // Warning log

// Process Info
console.log("Node version:", process.version);
console.log("Platform:", process.platform);
console.log("Current working directory:", process.cwd());

// Environment Variables
console.log("PATH env variable:", process.env.PATH);

// Exit the process
// process.exit(1); // Uncomment to exit program with error code 1

// Buffers
const buf = Buffer.from("Hello Node.js");
console.log("Buffer:", buf);          // <Buffer 48 65 6c 6c 6f 20 4e 6f 64 65 2e 6a 73>
console.log("Buffer to string:", buf.toString()); // Convert back to string

// Timers
const timeout = setTimeout(() => console.log("This won't run"), 5000);
clearTimeout(timeout); // Cancels the timeout

const immed = setImmediate(() => console.log("This won't run either"));
clearImmediate(immed); // Cancels the immediate

// Interval Example
let count = 0;
const interval = setInterval(() => {
  count++;
  console.log("Interval count:", count);
  if (count === 3) clearInterval(interval); // Stops after 3 counts
}, 1000);

// Next Tick Example
process.nextTick(() => console.log("This runs at the end of current operation"));

// Simple global object usage
global.myGlobal = "Accessible anywhere!";
console.log("Global variable:", global.myGlobal);