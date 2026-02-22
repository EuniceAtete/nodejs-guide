const EventEmitter = require('events');

const myEmitter = new EventEmitter();

function wishWkd(){
    console.log("You too!")
}

myEmitter.on('Have a great weekend',wishWkd);

myEmitter.emit('Have a great weekend');

//Removing the listener
myEmitter.removeListener('Have a great weekend',wishWkd);

myEmitter.emit('Have a great weekend');//This will print nothing