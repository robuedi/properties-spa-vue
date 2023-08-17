export type FormErrorResponseData = {
    message: string,
    errors: {
        [key: string]: string[];
    }
}

export type UserCredentials = {
    name: string, 
    email: string, 
    password: string, 
    password_confirmation: string,
    deviceName?: string 
}