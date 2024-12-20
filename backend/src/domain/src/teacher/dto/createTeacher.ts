import { IsEmail, IsNumber, IsString, IsStrongPassword } from 'class-validator';
import { Email } from '../../../../../../shared/interfaces';
import { Question } from '../../question/Question';
import { TeachingArea } from '../../../../../../shared/enum';

export class CreateTeacherDto {
  @IsString()
  teacherId: number;

  @IsString()
  name: string;

  @IsStrongPassword()
  password: string;

  @IsEmail()
  email: Email;

  credentials: string[];

  teachingArea: TeachingArea[];

  @IsNumber()
  score?: number = 0;

  answeredQuestions?: Question[] = [];
}
