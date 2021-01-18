class EventHub {
    cache = {};
    //{
    //  '楚天都市报':[fn1,fn2,fn3],
    //  '羊城晚报':[fn1,fn2]
    //}
    on(eventName, fn) {
        // 初始化
        if (this.cache[eventName] === undefined) {
            this.cache[eventName] = [];
        }
        // 将fn存入 this.cache[eventName]
        this.cache[eventName].push(fn);
    }
    
    emit(eventName) {
        // 将 this.cache[eventName]里面的fn依次调用
        let arr = this.cache[eventName];
        if (arr === undefined) {
            arr = [];
        }
        arr.forEach(fn => {
            fn();
        });
    }
}

export default EventHub;