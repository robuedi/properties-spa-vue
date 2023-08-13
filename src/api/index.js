//setup axios
import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const axios = setupCache(Axios); 

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Content-Type'] = 'application/json';
window.axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`
window.axios.defaults.withCredentials = true
window.axios.defaults.delayed = false

import { useAuthStore } from "@/store/auth.store"
import router from '@/router'
import ToastEventBus from 'primevue/toasteventbus';

//set interceptors
window.axios.interceptors.response.use(
    //if all good continue
    (response)=> response,
    //if not
    (error) => {
        if ([401, 419].includes(error.response.status)){

            //check if token was refreshed
            if(error.config.headers["Authorization"] !== window.axios.defaults.headers.common["Authorization"]){
                //set the header for this request same as the default one
                error.config.headers["Authorization"] = window.axios.defaults.headers.common["Authorization"]
                return window.axios.request(error.config)
            }

            //check if we're just refreshing the token or logging out
            let responseURL = error.request.responseURL
            if(!responseURL.endsWith('/auth/logout')){
                ToastEventBus.emit('add', { severity: 'warning', summary: 'You are unauthenticated', detail: 'Please try to login again', life: 3000 });
            }

            router.push({name: 'home'})
            return Promise.reject(error)
        }
        else{
            return Promise.reject(error)
        }
        
    }
)

// setup query builder
import { Model } from 'vue-api-query'

// inject global axios instance as http client to Model
Model.$http = axios
