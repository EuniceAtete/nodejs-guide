const fs = require('fs');

// Async write to jenny.txt
fs.writeFile('jenny.txt', 'Jenny Miriotta', (err) => {
    if (err) throw err;
    console.log("jenny.txt written");
});

// Async read from jenny.txt
fs.readFile('jenny.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log("jenny.txt content:", data);
});

// Sync write to angella.txt
fs.writeFileSync('angella.txt', 'Sano Angella');
console.log("angella.txt written");

// Sync read from angella.txt
const info = fs.readFileSync('angella.txt', 'utf-8');
console.log("angella.txt content:", info);

// Async append to angella.txt
fs.appendFile('angella.txt', '\nHolla, mon nom est Angella!', (err) => {
    if (err) throw err;
    console.log("Text appended to angella.txt");
});

// Sync append to jenny.txt
fs.appendFileSync('jenny.txt', '\nWho is you?!');
console.log("Text appended to jenny.txt");
