import { IsEmail, IsUUID } from 'class-validator';
import { Email } from 'shared/interfaces';

export class TeacherLoginDto {
  @IsUUID()
  teacherId: number;

  @IsEmail()
  email: Email;

  password: string;
}
