import { HttpRequest, HttpResponse } from '@/presentation/http/contracts';

export interface Middleware {
  handle(req: HttpRequest, error?: Error): HttpResponse | Promise<void>;
}
