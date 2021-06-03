import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://localhost:5001/vp-emazon-clone/us-central1/api', //LOCAL
    baseURL: 'https://us-central1-vp-emazon-clone.cloudfunctions.net/api'
});

export default instance;