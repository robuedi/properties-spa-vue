import FormValidation from '@/services/forms/validation/FormValidation'
import * as yup from 'yup';

export default class AddressFormValidation extends FormValidation {

    constructor(){
        super({
            city_id: yup.string().required(),
            street_name: yup.string().required(),
            street_nr: yup.string().required(),
            postcode: yup.string().required(),
        })
    }

}