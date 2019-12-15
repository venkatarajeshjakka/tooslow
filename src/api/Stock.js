import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://rajesh-nse-data.herokuapp.com/api'
});

export default instance;