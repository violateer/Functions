import { mergeConfig, deepClone } from './helper';
import Interceptor from './interceptor';

class Axios {
    constructor (config) {
        // 默认配置
        this.defaults = deepClone(config);
        // 拦截器
        this.interceptors = {
            request: new Interceptor(),
            response: new Interceptor()
        };
    }
    
    // 发送get请求
    get (url, config) {
        config.method = 'get';
        config.url = url;
        return this.request(config);
    }
    
    //发送请求
    send (configs) {
        return new Promise((resolve => {
            let xhr = new XMLHttpRequest();
            
            xhr.onload = function () {
                resolve({
                    data: JSON.parse(xhr.responseText),
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            };
            xhr.open(configs.method, configs.baseURL + configs.url, true);
            
            //添加header头
            for (let key in configs.headers) {
                xhr.setRequestHeader(key, configs.headers[key]);
            }
            
            xhr.send();
        }));
    }
    
    //request请求
    request (config) {
        //配置合并
        let configs = mergeConfig(this.defaults, config);
        //将配置转成 Promise 对象，链式调用和返回 Promise 对象
        let promise = Promise.resolve(configs);
        
        //请求拦截器，遍历 interceptors.request 里的处理函数
        let requestHandlers = this.interceptors.request.handlers;
        requestHandlers.forEach(handler => {
            promise = promise.then(handler.resolvedHandler, handler.rejectedHandler);
        });
        
        //数据请求
        promise = promise.then(this.send);
        
        //相应拦截器，遍历 interceptors.response 里的处理函数
        let responseHandlers = this.interceptors.response.handlers;
        responseHandlers.forEach(handler => {
            promise = promise.then(handler.resolvedHandler, handler.rejectedHandler);
        });
        
        //返回响应信息
        return promise;
    }
}

export default Axios;