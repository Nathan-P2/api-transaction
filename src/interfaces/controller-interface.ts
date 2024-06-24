import { HttpRequest } from "./httpRequest-interface";
import { HttpResponse } from "./httpResponse-interface";

export interface Controller {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>
}