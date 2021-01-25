function deepClone (obj) {
    // 过滤特殊情况
    if (typeof obj !== 'object') return obj;
    if (obj === null) return null;
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }
    if (obj instanceof Date) {
        return new Date(obj);
    }
    
    let newObj = obj.constructor();
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

function mergeConfig (obj1, obj2) {
    let target = deepClone(obj1),
        source = deepClone(obj2);
    
    return Object.keys(source).reduce((t, k) => {
        if (['url', 'baseURL', 'method'].includes(k)) {
            t[k] = source[k];
        }
        if (['headers'].includes(k)) {
            t[k] = Object.assign({}, source[k], t[k]);
        }
        return t;
    }, target);
}

export { mergeConfig, deepClone };