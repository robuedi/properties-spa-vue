import { defineStore } from 'pinia';
import City from  "@/models/City";

import {ICity} from '@/types/database'

export const useCityStore = defineStore("city",{
    state: () => ({
        cities_: [] as ICity[],
        apiState: City.state.INITIAL as keyof typeof City.state
    }),
    getters: {
        cities: (state) => state.cities_,
    },
    actions: {
        async getAll(city = City.select('id', 'name', 'country_id')) {
            this.apiState = City.state.LOADING
            return new Promise((resolve, reject)=>{
                city
                .getCollection<ICity>()
                .then((response)=>{
                    this.cities_ = response
                    this.apiState = City.state.LOADED
                    resolve(response)
                })
                .catch((err)=>{
                    this.cities_ = []
                    this.apiState = City.state.ERROR
                    reject(err)
                })
            })
        },
    }
});
