import {FormErrorResponseData} from "@/types/api"

interface ErrorTree {
    [key: string]: string[] | NestedObject;
}

interface NestedObject {
    [key: string]: string[] | NestedObject;
}
export default class FormResponseErrorParser {
    public error: FormErrorResponseData;

    constructor(errorData: FormErrorResponseData) {
        this.error = errorData 
    }

    hierarchicalGroupping() :  ErrorTree{
        let errors = this.error?.errors ?? {}

        let treeError: ErrorTree = {}
        for(let key in errors){
            let keys = key.split('.') as string[]

            //single field
            if(keys.length === 1){
                treeError[key] = errors[key]
            }
            //or group of fields
            else if(keys.length > 1){
                let errorName = keys.slice(1).join('.')
                if(!(keys[0] in treeError)){
                    treeError[keys[0]] = {[errorName]: errors[key]}
                }
                else{
                    treeError[keys[0]] = {...treeError[keys[0]], [errorName]: errors[key]}
                }
            }
        }

        return treeError
    }
}

