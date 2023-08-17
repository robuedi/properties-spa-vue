import { defineStore } from 'pinia';
import City from  "@/services/models/City";

export const useCityStore = defineStore("city",{
    state: () => ({
        cities_: [],
        apiState: City.state.INITIAL
    }),
    getters: {
        cities: (state) => state.cities_,
    },
    actions: {
        async getAll(city = City.select('id', 'name', 'country_id')) {
            this.apiState = City.state.LOADING
            return new Promise((resolve, reject)=>{
                city
                .get()
                .then((response)=>{
                    this.cities_ = response.data
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
