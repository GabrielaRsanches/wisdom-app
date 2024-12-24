import { IsEmail } from 'class-validator';

export class TeacherLoginDto {
  @IsEmail()
  email: string;

  password: string;
}
