import FormValidation from '@/services/forms/validation/FormValidation'
import * as yup from 'yup';
import {  ErrMsgCallback } from '@/types/forms'

export default class RegisterFormValidation extends FormValidation {
    constructor(callback: ErrMsgCallback){
        super({
            name: yup.string().min(2).required(),
            email: yup.string().email().required(),
            password: yup.string().min(6).required(),
            password_confirmation: yup.string().min(6).required(),
          }, callback)
    }
}