import { Pool, PoolClient } from 'pg';
import { env } from '@/main/env';
import { DatabaseConnection } from '@/infra/repositories/contracts';

export class PostgresSQLConnection implements DatabaseConnection {
  private connection: PoolClient | undefined;

  constructor() {
    this.connection = undefined;
  }

  async getConnection(): Promise<void> {
    const pool = new Pool({
      user: env.pgUser,
      host: env.pgHost,
      database: env.pgDatabase,
      password: env.pgPassword,
      port: env.pgPort,
      connectionTimeoutMillis: 1000000,
      idleTimeoutMillis: 1000000,
      max: 10000000,
      allowExitOnIdle: false,
      keepAlive: true,
      maxUses: 10000000,
      statement_timeout: 1000000,
    });

    this.connection = await pool.connect();
  }

  async query<T = any>(query: string, params?: any[] | undefined): Promise<T> {
    if (!this.connection) {
      await this.getConnection();
    }

    const { rows } = await this.connection!.query(query, params);

    return rows as T;
  }

  async close(): Promise<void> {
    if (this.connection) {
      await this.connection.release();
    }
  }
}
