import axios from './axios';

axios.get('http://127.0.0.1:3000/user/info').then(res => {
    console.log(res);
});