class EventHub {
    cache = {};
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
        this.cache[eventName] = this.cache[eventName] || [];
        let index;
        for (let i = 0; i < this.cache[eventName].length; i++) {
            if (this.cache[eventName][i] === fn) {
                index = i;
                break;
            }
        }
        if (index === undefined) {
            return;
        } else {
            this.cache[eventName].splice(index, 1);
        }
    }
}

export default EventHub;