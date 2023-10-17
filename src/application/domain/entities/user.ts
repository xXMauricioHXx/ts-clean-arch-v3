import crypto from 'crypto';
import { CPF, Email } from '@/application/domain/value-objects';

export class User {
  private constructor(
    readonly id: string,
    readonly name: string,
    readonly email: Email,
    readonly document: CPF,
    readonly createdAt: Date,
    readonly updatedAt: Date,
    readonly deletedAt: Date | null
  ) {}

  static create(name: string, email: string, document: string): User {
    const userId = crypto.randomUUID();

    return new User(
      userId,
      name,
      new Email(email),
      new CPF(document),
      new Date(),
      new Date(),
      null
    );
  }
}
