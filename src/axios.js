import axios from "axios";


const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/clone-eb6e7/us-central1/api'  // the cloud function url
    
});

export default instance;