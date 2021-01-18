import EventHub from '../src';

const eventHub = new EventHub();

console.assert(eventHub instanceof Object === true, 'eventHub是个对象');

// on emit
// eventHub.on('xxx', () => {
//     console.log('被调用了');
// });
// eventHub.emit('xxx');