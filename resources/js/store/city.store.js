import { defineStore } from 'pinia';
import City from  "@/api/models/City";

export const useCityStore = defineStore("city",{
    state: () => ({
        cities_: [],
        apiState: City.state.INITIAL
    }),
    getters: {
        cities: (state) => state.cities_,
    },
    actions: {
        async getAll(options = {}) {
            let defaultOptions = {
                where: {},
                select: ['id','name', 'country_id']
            }

            this.apiState = City.state.LOADING
            return new Promise((resolve, reject)=>{
                City
                .where(options.where ?? defaultOptions.where)
                .select(...(options.select ?? defaultOptions.select))
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
