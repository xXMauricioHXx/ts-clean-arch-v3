import { Container } from '@/main/container/contracts';
import { Controller } from '@/presentation/http/contracts';
import { CreateUserUseCase } from '@/application/user-cases';
import { CreateUserController } from '@/presentation/http/controllers';

export const makeCreateUserController = (container: Container): Controller => {
  const createUserUseCase =
    container.resolve<CreateUserUseCase>('createUserUseCase');

  return new CreateUserController(createUserUseCase);
};
