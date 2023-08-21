import * as yup from 'yup'
import {  GeneralInputType, FormErrorMessages, IInputObj, ErrMsgCallback } from '@/types/forms'

export default class FormValidation{

    protected errors: FormErrorMessages = {}
    protected errorsCallback: ErrMsgCallback = ()=>{}
    protected schemaObj 

    constructor(schemaObj_: {}, errorsCallback: ErrMsgCallback){
        this.schemaObj = yup.object().shape(schemaObj_)
        this.errorsCallback = errorsCallback
    }

    validateInput(){
        return async (inputName: string, inputValue: GeneralInputType) => {
            let obj: IInputObj = {}
            obj[inputName] = inputValue

            //make the validation
            await this.schemaObj.validateAt(inputName, obj)
            .then(() => {
                // No validation errors for this field, remove from the errors object
                delete this.errors[inputName];
            })
            .catch(validationError => {
                this.errors[inputName] = validationError.message;
            })

            this.errorsCallback({...this.errors})
        }
    }
}