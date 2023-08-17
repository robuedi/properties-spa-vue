import { Model as BaseModel } from 'vue-api-query'
import {APICollectionListing} from "@/types/pagination"

export default class Model extends BaseModel {

    static state = Object.freeze({
        INITIAL: 'INITIAL',
        LOADING: 'LOADING',
        LOADED: 'LOADED',
        ERROR: 'ERROR'
    })

    // Define a base url for a REST API
    baseURL() {
        return `${import.meta.env.VITE_API_URL}`
    }

    // Implement a default request method
    request(config: any) {
        return this.$http.request(config)
    }

    getPagination<T>() : Promise<APICollectionListing<T>>{
        return new Promise((resolve, reject)=>{
            super
            .get()
            .then((response) => {
                let data: unknown = response as unknown
                let castedData: APICollectionListing<T> = data as APICollectionListing<T>
                resolve(castedData)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    }

}