import { IUserRepository } from '@/application/domain/repositories';
import { CreateUserUseCase } from '@/application/user-cases';

export type InfraContext = {
  userRepository: IUserRepository;
};
export type InfraKeys = keyof InfraContext;

export type ApplicationContext = {
  createUserUseCase: CreateUserUseCase;
};

export type ApplicationKeys = keyof ApplicationContext;
