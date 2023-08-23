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
                let response_: unknown = response as unknown
                if( response_ && typeof response_ === 'object' && 'data' in response_){
                    let castedData: APICollectionListing<T> = response_ as APICollectionListing<T>
                    resolve(castedData)
                }
                reject('Wrong format data from server')
            })
            .catch((err)=>{
                reject(err)
            })
        })
    }

    getCollection<T>() : Promise<T[]>{
        return new Promise((resolve, reject)=>{
            super
            .get()
            .then((response) => {
                let collection = response as unknown
                if( collection && typeof collection === 'object' && 'data' in collection){
                    resolve(collection.data as T[])
                }
                reject('Wrong format data from server')
            })
            .catch((err)=>{
                reject(err)
            })
        })
    }

}