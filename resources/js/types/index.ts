export enum ApiState {
    INITIAL,
    LOADING,
    LOADED,
    ERROR
}

type User = {
    id: number
    name: string
    email: string
}