import FormValidation from '@/services/forms/validation/FormValidation'
import * as yup from 'yup';
import {  ErrMsgCallback } from '@/types/forms'

export default class AddressFormValidation extends FormValidation {
    constructor(callback: ErrMsgCallback){
        super({
            city_id: yup.string().required().label('city'),
            street_name: yup.string().required().label('street name'),
            street_nr: yup.string().required().label('street number'),
            postcode: yup.string().required().label('postcode'),
        }, callback)
    }

    static make(callback: ErrMsgCallback){
        let validator = new this(callback)
        return {
            doValidate: validator.validateInput()
        }
    }
}