class EventHub {
    private cache = {};
    //{
    //  '楚天都市报':[fn1,fn2,fn3],
    //  '羊城晚报':[fn1,fn2]
    //}
    on(eventName, fn) {
        // 将fn存入 this.cache[eventName]
        this.cache[eventName] = this.cache[eventName] || [];
        this.cache[eventName].push(fn);
    }
    
    emit(eventName, data?) {
        // 将 this.cache[eventName]里面的fn依次调用
        this.cache[eventName] = this.cache[eventName] || [];
        this.cache[eventName].forEach(fn => fn(data));
    }
    
    off(eventName, fn) {
        // 将fn从 this.cache[eventName]删除
        const index = indexOf(this.cache[eventName], fn);
        if (index === -1) return;
        this.cache[eventName].splice(index, 1);
    }
}

export default EventHub;

function indexOf(array, item) {
    if (array === undefined) return -1;
    let index = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            index = i;
            break;
        }
    }
    return index;
}