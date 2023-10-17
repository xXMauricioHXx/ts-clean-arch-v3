import * as dotenv from 'dotenv';
import { EnvValidator } from '@/main/env/validator';

dotenv.config();

const props = {
  httpPort: parseInt(process.env.HTTP_PORT || '3000', 10),
  httpBodyLimit: process.env.HTTP_BODY_LIMIT || '10kb',
  pgUser: process.env.PG_USER || 'postgres',
  pgHost: process.env.PG_HOST || 'localhost',
  pgDatabase: process.env.PG_DATABASE || 'postgres',
  pgPassword: process.env.PG_PASSWORD || 'postgres',
  pgPort: parseInt(process.env.PG_PORT || '5432', 10),
};

export const env = new EnvValidator(props);
