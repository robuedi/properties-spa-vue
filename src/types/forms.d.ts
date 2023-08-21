export interface IInputObj {
    [name: string]: string|number|boolean|null
}

export interface ErrMsgCallback {
    (data: FormErrorMessages): void
}

export type ErrorMessagTxt =string | null
export type FormErrorMessages = Record<string, ErrorMessagTxt>

export type GeneralInputType = string|number|boolean|null