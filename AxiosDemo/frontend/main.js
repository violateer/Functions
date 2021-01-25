import axios from './axios';

axios.get('/user/info', {
    baseURL: 'http://127.0.0.1:3000',
    headers: {
        token: 'x-token-123456'
    }
}).then(res => {
    console.log(res);
});