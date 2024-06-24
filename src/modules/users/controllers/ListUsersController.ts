import { Controller } from "@src/interfaces/controller-interface";
import { HttpRequest } from "@src/interfaces/httpRequest-interface";
import { HttpResponse } from "@src/interfaces/httpResponse-interface";

export class ListUsersController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    return {
      statusCode: 200,
      message: 'List users successfully'
    }
  }
}