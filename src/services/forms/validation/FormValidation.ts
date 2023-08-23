import {  GeneralInputType, FormErrorMessages, IInputObj, ErrMsgCallback } from '@/types/forms'
import { ObjectSchema } from 'yup';
import * as yup from 'yup';

export default class FormValidation{

    protected errors: FormErrorMessages = {}
    protected errorsCallback: ErrMsgCallback = ()=>{}
    protected schemaObj: ObjectSchema<any>

    constructor(schemaObj: ObjectSchema<any>|{}, errorsCallback: ErrMsgCallback){
        //check if we get the preconfigured schema or just the rules
        if(schemaObj instanceof ObjectSchema){
            this.schemaObj = schemaObj
        }
        else{
            this.schemaObj = yup.object().shape(schemaObj)
        }

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