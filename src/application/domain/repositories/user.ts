import { User } from "@/application/domain/entities/user";

export interface IUserRepository {
  save(user: User): Promise<void>;
}
