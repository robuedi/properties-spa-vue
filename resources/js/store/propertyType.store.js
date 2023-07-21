import { defineStore } from 'pinia';
import PropertyType from  "@/api/models/PropertyType";

export const usePropertyTypeStore = defineStore("propertyType",{
    state: () => ({
        propertyTypes_: [],
        apiState: PropertyType.state.INITIAL
    }),
    getters: {
        propertyTypes: (state) => state.propertyTypes_,
    },
    actions: {
        async getAll() {
            this.apiState = PropertyType.state.LOADING
            return new Promise((resolve, reject)=>{
                PropertyType
                .get()
                .then((response)=>{
                    this.propertyTypes_ = response.data
                    this.apiState = PropertyType.state.LOADED
                    resolve(response)
                })
                .catch((err)=>{
                    this.propertyTypes_ = []
                    this.apiState = PropertyType.state.ERROR
                    reject(err)
                })
            })
        },
    }
});
