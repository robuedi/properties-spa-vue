import FormValidation from '@/services/forms/validation/FormValidation'
import * as yup from 'yup';
import {  ErrMsgCallback } from '@/types/forms'

export default class PropertyFormValidation extends FormValidation {
    constructor(callback: ErrMsgCallback){
        super({
            name: yup.string().required(),
            description: yup.string().required(),
            property_type_id: yup.string().required(),
            listing_type_id: yup.string().required(),
            bathrooms: yup.number().required(),
            bedrooms: yup.number().required(),
        }, callback)
    }

    static make(callback: ErrMsgCallback){
        let validator = new this(callback)
        return {
            doValidate: validator.validateInput()
        }
    }
}