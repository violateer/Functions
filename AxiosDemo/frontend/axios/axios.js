import { mergeConfig } from './helper';

class Axios {
    constructor (config) {
        this.defaults = config;
    }
    
    get (url, config) {
        let configs = mergeConfig(this.defaults, config);
        return new Promise((resolve => {
            let xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve({
                    data: JSON.parse(xhr.responseText),
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            };
            xhr.open('get', configs.baseURL + url, true);
            // 添加header
            for (let key in configs.headers) {
                xhr.setRequestHeader(key, configs.headers[key]);
            }
            xhr.send();
        }));
    }
}

export default Axios;