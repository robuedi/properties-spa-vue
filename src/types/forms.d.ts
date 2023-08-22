export interface IInputObj {
    [name: string]: string|number|boolean|null
}

export interface ErrMsgCallback {
    (data: FormErrorMessages): void
}

export type ErrorMessagTxt =string | null

export type FormErrorMessages = Record<string, ErrorMessagTxt>

export type GeneralInputType = string|number|boolean|null

export interface IAddressForm {
    country_id: number|null,
    city_id: number|null,
    street_nr: string|null,
    street_name: string|null,
    postcode: string|null
}

export interface IPropertyForm {
    name: null,
    description: null,
    bedrooms: null,
    bathrooms: null,
    listing_type_id: null,
    property_type_id: null,
    is_public: false
}

export interface ISellListing {
    price: null
}


export interface IRegistrationForm {
    name: string|null,
    email: string|null,
    password: string|null,
    password_confirmation: string|null,
}