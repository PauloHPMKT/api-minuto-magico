import { HttpResponse } from "../http/httpReponse";
import { HttpRequest } from "../http/httpRequest";

export interface Controller {
    handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
