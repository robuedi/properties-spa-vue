import { defineStore } from 'pinia';
import ListingType from  "@/api/models/ListingType";

export const useListingTypeStore = defineStore("listingType",{
    state: () => ({
        listingTypes_: [],
        apiState: ListingType.state.INITIAL
    }),
    getters: {
        listingTypes: (state) => state.listingTypes_,
    },
    actions: {
        async getAll(listingType = ListingType.select('id','name')) {
            this.apiState = ListingType.state.LOADING
            return new Promise((resolve, reject)=>{
                listingType
                .get()
                .then((response)=>{
                    this.listingTypes_ = response.data
                    this.apiState = ListingType.state.LOADED
                    resolve(response)
                })
                .catch((err)=>{
                    this.listingTypes_ = []
                    this.apiState = ListingType.state.ERROR
                    reject(err)
                })
            })
        },
    }
});





