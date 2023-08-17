import { defineStore } from 'pinia';
import PropertyType from  "@/services/models/PropertyType";
import {IPropertyType} from '@/types/database'

export const usePropertyTypeStore = defineStore("propertyType",{
    state: () => ({
        propertyTypes_: [] as IPropertyType[],
        apiState: PropertyType.state.INITIAL as keyof typeof PropertyType.state
    }),
    getters: {
        propertyTypes: (state) => state.propertyTypes_,
    },
    actions: {
        async getAll(propertyType = PropertyType.select('id', 'name')) {
            this.apiState = PropertyType.state.LOADING
            return new Promise((resolve, reject)=>{
                propertyType
                .getPagination<IPropertyType>()
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
