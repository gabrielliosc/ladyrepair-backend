export interface Client {
    id?: number
    name: string,
    email: string,
    password: string,
    avatar?: Blob,
    created_at?: Date,
    updated_at?: Date
}

export interface Contractor {
    id?: number,
    status: string,
    name: string,
    email: string,
    password: string,
    avatar?: Blob,
    contact: string,
    about?: string,
    rating?: number,
    created_at?: Date,
    updated_at?: Date
}

export interface Quotation {
    id?: number,
    client_id: number,
    contractor_id: number,
    value: number,
    description: string,
    created_at?: Date
}

export interface Service {
    id?: number
    contractor_id: number,
    name: string,
    state?: string,
    city?: string,
    borough?: string,
    description: string,
    hours: string,
    picture: Blob,
    created_at?: Date,
    updated_at?: Date
}

export interface ServiceTypes {
    id?: number,
    service_id: string, //Conferir
    name: string,
}

export interface Chat {
    id?: number
    client_id: number,
    contractor_id: number,
    message: string,
    direction: string,
    send_date: Date
}

export interface Recommendation {
    id?: number
    contractor_from_id: number,
    contractor_to_id: number,
    message: string
}