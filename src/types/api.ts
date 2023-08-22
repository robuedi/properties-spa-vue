export type FormErrorResponseData = {
    message: string,
    errors: {
        [key: string]: string[];
    }
}

export type UserLoginCredentials = {
    email: string, 
    password: string, 
    deviceName?: string 
}

