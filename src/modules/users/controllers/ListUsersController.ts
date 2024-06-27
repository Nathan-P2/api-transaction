import { Controller } from "@src/interfaces/controller-interface";
import { HttpRequest } from "@src/interfaces/httpRequest-interface";
import { HttpResponse } from "@src/interfaces/httpResponse-interface";
import { ok } from "@src/helpers/http-status";

export class ListUsersController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    return ok('Listed users successfully')
  }
}