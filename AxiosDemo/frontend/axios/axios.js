class Axios {
    constructor () {
    
    }
    
    get (url) {
        return new Promise((resolve => {
            let xhr = new XMLHttpRequest();
            
            xhr.onload = function () {
                resolve({
                    data: JSON.parse(xhr.responseText),
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            };
            
            xhr.open('get', url, true);
            xhr.send();
        }));
    }
}

export default Axios;