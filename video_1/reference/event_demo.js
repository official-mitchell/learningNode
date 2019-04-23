const EventEmitter = require('events');

// Create a class
class MyEmitter extends EventEmitter { }

// Init object
const myEmiter = new MyEmitter();

// Event Lisntener
myEmitter.on('event', () => console.log('Event Fired!'))

// Init event -> Event Fired
myEmitter.emit('event');


