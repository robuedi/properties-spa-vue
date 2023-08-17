export type FormErrorResponseData = {
    message: string,
    errors: {
        [key: string]: string[];
    }
}

export type UserRegistrationCredentials = {
    name: string, 
    email: string, 
    password: string, 
    password_confirmation: string,
}

export type UserLoginCredentials = {
    email: string, 
    password: string, 
    deviceName?: string 
}

