import UserProperty from  "@/models/UserProperty"
import FormResponseErrorParser from "@/services/forms/FormResponseErrorParser"
import {FormErrorResponseData} from "@/types/api"
import { AxiosResponse } from "axios";
import { useAuthStore } from "@/store/auth.store";
import {IUserProperty} from '@/types/database';

export default class UserPropertyService {
    protected userId: number|null

    constructor(){
        const auth = useAuthStore()
        this.userId = auth.authUser?.id
    }

    getAll(){
        const prop = new UserProperty()
        prop.setUserId(this.userId)
        return prop
            .include(['propertyType', 'listingType', 'rentListing', 'sellListing'])
            .getPagination<IUserProperty>()
    }

    store(propertyData: any){
        return new Promise((resolve, reject) => {
            const prop = new UserProperty(propertyData)
            prop.setUserId(this.userId)
            prop.save()
            .then((response)=>{
                return resolve(response)
            })
            .catch((err)=> {
                const axiosResponse: AxiosResponse<FormErrorResponseData, any> = err.response as AxiosResponse<FormErrorResponseData>
                let errParser = new FormResponseErrorParser(axiosResponse.data)
                return reject(errParser.hierarchicalGroupping())
            })
           
        })
    }
}
