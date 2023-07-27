import { defineStore } from 'pinia';
import Property from  "@/api/models/Property";

export const usePropertyStore = defineStore("property",{
    actions: {
        async store(propertyData) {
            return new Promise((resolve, reject)=>{
                const property = new Property(propertyData)
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
