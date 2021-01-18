import EventHub from '../src';


const test1 = (message) => {
    const eventHub = new EventHub();
    console.assert(eventHub instanceof Object === true, 'eventHub是个对象');
    console.log(message);
};

// on emit
const test2 = (message) => {
    const eventHub = new EventHub();
    let called = false;
    eventHub.on('xxx', (data) => {
        called = true;
        console.assert(data === '买水喝');
    });
    eventHub.emit('xxx', '买水喝');
    setTimeout(() => {
        console.assert(called === true);
        console.log(message);
    }, 1000);
};

const test3 = (message) => {
    const eventHub = new EventHub();
    let called = false;
    const fn1 = () => {
        called = true;
    };
    eventHub.on('yyy', fn1);
    eventHub.off('yyy', fn1);
    eventHub.emit('yyy');
    setTimeout(() => {
        console.assert(called === false);
        console.log(message);
    }, 1000);
};

test1('EventHub可以创建对象');
test2('.on之后 .emit会触发.on的函数');
test3('.off有用');