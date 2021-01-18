class EventHub {
    cache = {};
    //{
    //  '楚天都市报':[fn1,fn2,fn3],
    //  '羊城晚报':[fn1,fn2]
    //}
    on(eventName, fn) {
        // 初始化
        this.cache[eventName] = this.cache[eventName] || [];
        // 将fn存入 this.cache[eventName]
        this.cache[eventName].push(fn);
    }
    
    emit(eventName) {
        // 初始化
        this.cache[eventName] = this.cache[eventName] || [];
        // 将 this.cache[eventName]里面的fn依次调用
        this.cache[eventName].forEach(fn => fn());
    }
}

export default EventHub;