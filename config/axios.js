import axios from 'axios';
import config from './config';

const instance = axios.create({
	baseURL: config.BASE_API_URL,
	withCredentials: false,
});

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = false;
axios.defaults.crossDomain = true;

export default instance;