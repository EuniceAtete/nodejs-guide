const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.once('login',(username) => {
    console.log(`${username} just logged in`);
})

myEmitter.emit('login','Adelin');
myEmitter.emit('login','Galen');// This is ignored because of the 'once' keyword