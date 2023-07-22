import { defineStore } from 'pinia';
import Country from  "@/api/models/Country";

export const useCountryStore = defineStore("country",{
    state: () => ({
        countries_: [],
        apiState: Country.state.INITIAL
    }),
    getters: {
        countries: (state) => state.countries_,
    },
    actions: {
        async getAll(country = Country.select('id','name')) {
            this.apiState = Country.state.LOADING
            return new Promise((resolve, reject)=>{
                country
                .get()
                .then((response)=>{
                    this.countries_ = response.data
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
