type ArrErrMessage = Record<string, string[]> 
import { FormErrorMessages } from '@/types/forms'

export default function useFormErrParser() {
    const formErrParse = (errorObj: unknown) => {
        //check if is array
        if(Array.isArray(errorObj)&&errorObj.length > 0){
            return {'general': errorObj.flat().join('')} as FormErrorMessages
        }

        //try to cast
        let errCast = errorObj as ArrErrMessage
        if(errCast){
            let errors_: FormErrorMessages = {}
            for(let errKey in errCast){
                errors_[errKey] = errCast[errKey].join(' ')
            }
            return errors_
        }

        throw Error('Unknown error message from server')
    }
   
    return { 
        formErrParse
    }
}