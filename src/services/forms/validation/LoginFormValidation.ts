import FormValidation from '@/services/forms/validation/FormValidation'
import * as yup from 'yup';
import {  ErrMsgCallback } from '@/types/forms'

export default class LoginFormValidation extends FormValidation {
    constructor(callback: ErrMsgCallback){
        super({
            email: yup.string().email().required(),
            password: yup.string().required(),
        }, callback)
    }
}