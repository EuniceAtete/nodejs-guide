const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('borrow',(bookName) => {
    console.log(`You just borrowed ${bookName}`)
});

myEmitter.emit('borrow','The Boy With Stripped Pajamas');