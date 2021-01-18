import EventHub from '../src';

const eventHub = new EventHub();

console.assert(eventHub instanceof Object === true, 'eventHub是个对象');

// on emit
let called = false;
eventHub.on('xxx', () => {
    called = true;
    console.log('called：' + called);
});
eventHub.emit('xxx');