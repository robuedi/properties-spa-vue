export type FormErrorResponseData = {
    message: string,
    errors: {
        [key: string]: string[];
    }
}