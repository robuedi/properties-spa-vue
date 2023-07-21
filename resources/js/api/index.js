//setup axios
import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const axios = setupCache(Axios); 

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Content-Type'] = 'application/json';
window.axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`
window.axios.defaults.withCredentials = true

import { useAuthStore } from "@/store/auth.store";
import { useToast } from "vue-toastification";

//set interceptors
window.axios.interceptors.response.use(
    //if all good continue
    (response)=> response,
    //if not
    (error) => {
        if ([401, 419].includes(error.response.status)){
            const auth = useAuthStore()
            auth.clearUserCache()
            const router = useRouter()

            //check if we're just refreshing the token or logging out
            let responseURL = error.request.responseURL
            if(responseURL.endsWith('/auth/logout')){
                router.push({name: 'home'})
            }

            const toast = useToast()
            toast.warning("You are unauthenticated, please login to continue.");
            router.push({name: 'login'})
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
