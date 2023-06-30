import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'

//default values
import {defaultUser} from './defaultStateValues'

export const useAuthStore = defineStore("auth",{
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: useStorage('user', {...defaultUser}),
        token: useStorage('token', ''),
    }),
    getters: {
        isLogged: (state) => !!state.token,
        authUser: (state) => state.user
    },
    actions: {
        async login(email, password) {
            return axios.post("auth/login", {email: email, password: password, device_name: 'web'})
                .then((response) => {
                    //check our response
                    if(!response.data?.data?.token){
                        return Promise.reject({message: 'Invalid response from the server.'})
                    }

                    this.token = `Bearer ${response.data.data.token}`;
                        
                    //set axios token
                    this.setToken()

                    //get the user data
                    this.getUser()

                    return response
                })
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
                    this.user = {...defaultUser};
                    this.token = '';
                    return response
                })
        },
        async setToken(){
            axios.defaults.headers.common["Authorization"] = this.authToken;
        }
    }
});
