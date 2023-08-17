import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'

//default values
const defaultUser = {name:'', email:''}

export const useAuthStore = defineStore("auth",{
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: useStorage('user', {...defaultUser}),
        token: useStorage('token', ''),
    }),
    getters: {
        isLogged: (state) => !!state.token,
        authUser: (state) => state.user,
    },
    actions: {
        async register(credentials) {
            return axios.post("auth/register", {name: credentials.name, email: credentials.email, password: credentials.password, password_confirmation: credentials.password_confirmation})
        },
        async login(credentials) {
            return axios.post("auth/login", {email: credentials.email, password: credentials.password, device_name: credentials?.deviceName ?? 'web'})
                .then((response) => {
                    //check our response
                    if(!response?.data?.data?.token){
                        return Promise.reject({message: 'Invalid response from the server.'})
                    }

                    this.token = `Bearer ${response.data.data.token}`;
                        
                    //set axios token
                    this.setAxiosAuthorization()

                    //get the user data
                    this.getUser()

                    return response
                })
        },
        async refreshToken() {
            if(!this.token){
                return;
            }

            this.setAxiosAuthorization()
            return axios.get("auth/refresh-token")
                .then((response) => {
                    //check our response
                    if(!response?.data?.data?.token){
                        return Promise.reject({message: 'Invalid response from the server.'})
                    }

                    this.token = `Bearer ${response.data.data.token}`;
                        
                    //set axios token
                    this.setAxiosAuthorization()

                    //get the user data
                    this.getUser()

                    return response
                })
                .catch(()=>{})
        },
        async getUser(){
            return axios.get("auth/user")
                .then((response) => {
                    if(!response?.data?.data?.user){
                        return Promise.reject({message: 'Invalid response from the server.'})
                    }

                    this.user = response.data.data.user
                    return response
                })
        },
        async logout() {
            return axios.get("auth/logout")
                .then((response) => {
                    return response
                })
                .finally(()=>{
                    this.user = {...defaultUser};
                    this.token = '';
                    axios.defaults.headers.common["Authorization"] = '';
                })
        },
        async setAxiosAuthorization(){
            axios.defaults.headers.common["Authorization"] = this.token;
        }
    }
});
