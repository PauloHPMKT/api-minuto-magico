import { HttpResponse } from "../http/httpReponse";

export const badRequest = (error: Error): HttpResponse => ({
    statusCode: 400,
    body: error
})

export const ok = (data: any): HttpResponse => ({
    statusCode: 200,
    body: data
})
