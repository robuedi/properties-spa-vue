import UserProperty from  "@/api/models/UserProperty";
import FormResponseErrorParser from "@/services/forms/FormResponseErrorParser"
import {FormErrorResponseData} from "@/types/api"
import { AxiosResponse } from "axios";

export default class UserPropertyService {
    static getAll(){
        return UserProperty
            .include(['propertyType', 'listingType', 'rentListing', 'sellListing'])
            .paginate()
    }

    static store(propertyData: any){
        return new Promise((resolve, reject) => {
            new UserProperty(propertyData)
            .save()
            .then((response)=>{
                resolve(response)
            })
            .catch((err)=> {
                const axiosResponse: AxiosResponse<FormErrorResponseData, any> = err.response as AxiosResponse<FormErrorResponseData>
                let errParser = new FormResponseErrorParser(axiosResponse.data)
                reject(errParser.hierarchicalGroupping())
            })
           
        })
    }
}
