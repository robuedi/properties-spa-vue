import { defineStore } from 'pinia';
import Country from  "@/models/Country";
import {ICountry} from '@/types/database'

export const useCountryStore = defineStore("country",{
    state: () => ({
        countries_: [] as ICountry[],
        apiState: Country.state.INITIAL as keyof typeof Country.state
    }),
    getters: {
        countries: (state) => state.countries_,
    },
    actions: {
        async getAll(country = Country.select('id','name')) {
            this.apiState = Country.state.LOADING
            return new Promise((resolve, reject)=>{
                country
                .getCollection<ICountry>()
                .then((response)=>{
                    this.countries_ = response
                    this.apiState = Country.state.LOADED
                    resolve(response)
                })
                .catch((err)=>{
                    this.countries_ = []
                    this.apiState = Country.state.ERROR
                    reject(err)
                })
            })
        },
    }
});
