import EventHub from '../src';

const eventHub = new EventHub();

console.assert(eventHub instanceof Object === true, 'eventHub是个对象');

// on emit
let called = false;
eventHub.on('xxx', (data) => {
    called = true;
    console.log('called：' + called);
    console.assert(data === '买水喝');
});
eventHub.emit('xxx', '买水喝');