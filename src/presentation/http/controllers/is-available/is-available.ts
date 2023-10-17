import { httpStatus, get, schema } from '@/shared/decorators';
import { Controller, HttpResponse } from '@/presentation/http/contracts';

@get('/is-available')
export class IsAvailableController extends Controller {
  constructor() {
    super();
  }

  @httpStatus(202)
  async handle(): Promise<HttpResponse<IsAvailableController.Response>> {
    return {
      data: {
        is_available: true,
      },
    };
  }

  exception(error: Error): Error {
    return error;
  }
}

export namespace IsAvailableController {
  export type Response = {
    is_available: boolean;
  };
}
