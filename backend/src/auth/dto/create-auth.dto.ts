import { IsNotEmpty } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty({ message: 'Username is required' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  password: string;

  @IsNotEmpty({ message: 'Name is required' })
  name: string;
}

export class CodeAuthDto {
  @IsNotEmpty({ message: '_id is required' })
  _id: string;

  @IsNotEmpty({ message: 'Code is required' })
  code: string;
}
