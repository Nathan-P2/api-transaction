import { HttpResponse } from "@src/interfaces/httpResponse-interface";

export const ok = (message: string, body?: any): HttpResponse => {
  return {
    message,
    statusCode: 200,
    body
  }
}