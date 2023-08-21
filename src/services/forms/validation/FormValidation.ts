import * as yup from 'yup'
import {  IFormErrObj, IInputObj } from '@/types/forms'

export default class AddressFormValidation{

    protected errors: IFormErrObj = {}
    protected schemaObj

    constructor(schemaObj: {}){
        this.schemaObj = yup.object().shape(schemaObj)
    }

    async validateInput(inputName: string, inputValue: string|number|boolean|null){
        let obj: IInputObj = {}
        obj[inputName] = inputValue
        await this.schemaObj.validateAt(inputName, obj)
        .then(() => {
            // No validation errors for this field, remove from the errors object
            delete this.errors[inputName];
        })
        .catch(validationError => {
          this.errors[inputName] = validationError.message;
        })

        return this.errors
    }

}