class EventHub {
    private cache = {};
    
    on(eventName, fn) {
        this.cache[eventName] = this.cache[eventName] || [];
        this.cache[eventName].push(fn);
    }
    
    emit(eventName, data?) {
        this.cache[eventName] = this.cache[eventName] || [];
        this.cache[eventName].forEach(fn => fn(data));
    }
    
    off(eventName, fn) {
        const index = indexOf(this.cache[eventName], fn);
        if (index === -1) return;
        this.cache[eventName].splice(index, 1);
    }
}

export default EventHub;

/**
 *  @param {Array} array
 *  @param {Function} item
 *  @access 帮助函数 indexOf
 */
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