import FormValidation from '@/services/forms/validation/FormValidation'
import * as yup from 'yup';
import {  ErrMsgCallback } from '@/types/forms'

export default class SellListingFormValidation extends FormValidation {
    constructor(callback: ErrMsgCallback){
        super({
            price: yup.number().required(),
          }, callback)
    }
}