import { IsEmail, IsString } from 'class-validator';

export class StudentLoginDto {
  @IsString()
  studentId: number;

  @IsEmail()
  email: string;

  password: string;
}
