import { IsInt, IsNotEmpty } from 'class-validator';

export class EnvValidator {
  @IsInt()
  @IsNotEmpty()
  httpPort: number;

  @IsNotEmpty()
  httpBodyLimit: string;

  @IsNotEmpty()
  pgUser: string;

  @IsNotEmpty()
  pgHost: string;

  @IsNotEmpty()
  pgDatabase: string;

  @IsNotEmpty()
  pgPassword: string;

  @IsNotEmpty()
  pgPort: number;

  constructor(props: any) {
    Object.assign(this, props);
  }
}
