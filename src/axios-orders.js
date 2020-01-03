import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-bbuilder-fef4d.firebaseio.com/'
})

export default instance;