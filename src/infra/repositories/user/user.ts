import { User } from '@/application/domain/entities';
import { IUserRepository } from '@/application/domain/repositories';
import { DatabaseConnection } from '@/infra/repositories/contracts';

export class UserRepository implements IUserRepository {
  constructor(private readonly connection: DatabaseConnection) {}

  async save(user: User): Promise<void> {
    await this.connection.query(
      `INSERT INTO users (id, name, email, document, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6)`,
      [
        user.id,
        user.name,
        user.email.getValue(),
        user.document.getValue(),
        user.createdAt,
        user.updatedAt,
      ]
    );
  }
}
