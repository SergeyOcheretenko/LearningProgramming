'use strict';

const EventEmmiter = require('events');

const emmiter = new EventEmmiter();

const logDbConnection = () => {
    console.log('DB connected');
};

emmiter.on('connected', logDbConnection);
// OR: emmiter.addListener('connected', logDbConnection);
emmiter.emit('connected');

emmiter.off('connected', logDbConnection);
// OR: emmiter.removeListener('connected', logDbConnection);
// REMOVE ALL: emmiter.removeAllListeners('connected');
emmiter.emit('connected');

emmiter.on('msg', (data) => {
    console.log(`Data: ${data}`);
});

emmiter.prependListener('msg', (data) => {
    console.log('Prepend emit');
});

emmiter.emit('msg', 'Test data');

emmiter.once('onceEmit', () => {
    console.log('Only one emit');
});
emmiter.emit('onceEmit');
emmiter.emit('onceEmit');

console.log(emmiter.getMaxListeners());
emmiter.setMaxListeners(2);
console.log(emmiter.getMaxListeners());
console.log(emmiter.listenerCount('msg'));
console.log(emmiter.listenerCount('onceEmit'));
console.log(emmiter.listeners('msg'));

emmiter.on('error', (err) => {
    console.log(`Error happens: ${err.message}`);
});

emmiter.emit('error', new Error('ERROOOR'));