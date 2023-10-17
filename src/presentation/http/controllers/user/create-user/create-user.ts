import { httpStatus, post } from '@/shared/decorators';
import {
  Controller,
  HttpRequest,
  HttpResponse,
} from '@/presentation/http/contracts';
import { CreateUserUseCase } from '@/application/user-cases';

@post('/users')
export class CreateUserController extends Controller {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {
    super();
  }

  @httpStatus(200)
  async handle(
    data: HttpRequest<CreateUserController.Request>
  ): Promise<HttpResponse<CreateUserController.Response>> {
    const { name, document, email } = data.body!;

    const userId = await this.createUserUseCase.execute({
      name,
      document,
      email,
    });

    return {
      data: {
        user_id: userId,
      },
    };
  }

  exception(error: Error): Error {
    return error;
  }
}

export namespace CreateUserController {
  export type Request = {
    name: string;
    document: string;
    email: string;
  };

  export type Response = {
    user_id: string;
  };
}
