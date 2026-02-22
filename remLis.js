const EventEmitter = require('events');

const myEmitter = new EventEmitter();

function wishWkd(){
    console.log("You too!")
}

myEmitter.on('crime', (weapons) => {
    console.log(`Put your ${weapons} down!`)
})
myEmitter.on('Have a great weekend',wishWkd);

myEmitter.emit('Have a great weekend');

myEmitter.emit('crime','guns');

//Removing the listener
myEmitter.removeListener('Have a great weekend',wishWkd);

myEmitter.emit('Have a great weekend');//This will print nothing

myEmitter.removeAllListeners('crime')// Removes only this listener
myEmitter.removeAllListeners();// Removes all the listeners