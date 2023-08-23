import FormValidation from '@/services/forms/validation/FormValidation'
import * as yup from 'yup';
import {  ErrMsgCallback } from '@/types/forms'

export default class RentListingFormValidation extends FormValidation {
    constructor(callback: ErrMsgCallback){
        super({
            price_weekly: yup.number().nullable(),
            price_monthly: yup.number().nullable(),
            any_price: yup.number().required('Either the weekly price or the monthly price must be set.'),
            deposit: yup.number().required(),
            minimum_tenancy: yup.number().required(),
          }, callback)
    }
}