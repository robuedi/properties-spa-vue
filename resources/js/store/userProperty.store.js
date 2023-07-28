import { defineStore } from 'pinia';
import UserProperty from  "@/api/models/UserProperty";

export const useUserPropertyStore = defineStore("userProperty",{
    actions: {
        async store(propertyData) {
            return new Promise((resolve, reject)=>{
                const property = new UserProperty(propertyData)
                property.save()
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
