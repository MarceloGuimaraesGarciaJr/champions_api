import { HttpResponse } from "../models/httpResponseModel"


export const ok = async (data:any) : Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: data
    }
}

export const noContent = async () : Promise<HttpResponse> => { 
    return {
        statusCode: 204, 
        body: null
    }
}

export const badContent = async (error?:string) : Promise<HttpResponse> => { 
    return {
        statusCode: 400, 
        body: error ?? ""
    }
}

export const created = async () : Promise<HttpResponse> => { 
    return {
        statusCode: 201, 
        body: "Sucessfuly created"
    }
}