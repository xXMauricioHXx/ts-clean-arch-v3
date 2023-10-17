import { PostgresSQLConnection } from '@/adapters';
import { IUserRepository } from '@/application/domain/repositories';
import { CreateUserUseCase } from '@/application/user-cases';
import { UserRepository } from '@/infra/repositories/user/user';
import {
  Container,
  InfraKeys,
  ApplicationKeys,
} from '@/main/container/contracts';

export class AppContainer extends Container {
  constructor() {
    super();
    this.infraContext = this.buildInfraContext();
    this.applicationContext = this.buildApplicationContext();
  }

  buildInfraContext(): Map<InfraKeys, any> {
    const databaseConnection = new PostgresSQLConnection();
    const context = new Map<InfraKeys, any>();

    context.set('userRepository', new UserRepository(databaseConnection));

    return context;
  }

  buildApplicationContext(): Map<ApplicationKeys, any> {
    const context = new Map<ApplicationKeys, any>();

    context.set(
      'createUserUseCase',
      new CreateUserUseCase(this.resolve<IUserRepository>('userRepository'))
    );

    return context;
  }
}
