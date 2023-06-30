//setup axios
import axios from 'axios';
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Content-Type'] = 'application/json';
window.axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`
window.axios.defaults.withCredentials = true

// setup query builder
import { Model } from 'vue-api-query'

// inject global axios instance as http client to Model
Model.$http = axios