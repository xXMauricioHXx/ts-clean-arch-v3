import { User } from '@/application/domain/entities';
import { IUserRepository } from '@/application/domain/repositories';

export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(request: CreateUserUseCase.Params): Promise<string> {
    const user = User.create(request.name, request.email, request.document);
    await this.userRepository.save(user);
    return user.id;
  }
}

export namespace CreateUserUseCase {
  export type Params = {
    name: string;
    email: string;
    document: string;
  };
}
