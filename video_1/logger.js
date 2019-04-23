// Used with Example 2

const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        //call event (extend eventemitter)
        this.emit('message', { id: uuid.v4(), msg });
        // everytime called log, it should call this.
        
    }
}

module.exports = Logger;