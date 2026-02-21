const path = require('path');

console.log(path.normalize('/test//foo/../bar'));
console.log(path.join("/docs","projects","nodejs.txt"));
console.log(path.resolve('app.js'));
console.log(path.isAbsolute('docs/projects/nodejs.txt'));
console.log(path.relative('/docs/projects','/docs/projects/nodejs.txt'));
console.log(path.dirname('docs/projects/nodejs.txt'))
console.log(path.basename('docs/projects/nodejs.txt'));
console.log(path.extname('docs/projects/nodejs.txt'));
console.log(path.parse('docs/projects/nodejs.txt'));

let moi = {root: '/',dir:'docs/projects',base: 'nodejs.txt', ext:'.txt'};
console.log(path.format(moi));
console.log("Separator: ",path.sep);
console.log("Delimiter: ",path.delimiter);
