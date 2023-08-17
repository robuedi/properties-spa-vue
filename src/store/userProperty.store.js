import { defineStore } from 'pinia';
import UserProperty from  "@/services/models/UserProperty";

export const useUserPropertyStore = defineStore("userProperty",{
    actions: {

        async getAll(properties = UserProperty.get()) {
            return new Promise((resolve, reject)=>{
                properties
                .then((response)=>{
                    resolve(response)
                })
                .catch((err)=>{
                    reject(err)
                })
            })
        },
    }
});
