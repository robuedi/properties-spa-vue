import { Model as BaseModel } from 'vue-api-query'

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
    request(config) {
        return this.$http.request(config)
    }

}