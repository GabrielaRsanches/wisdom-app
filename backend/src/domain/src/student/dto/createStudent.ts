import { IsEmail, IsString, IsStrongPassword } from 'class-validator';
import { Question } from '../../question/Question';
import { Grade } from '../../../../../../shared/enum';

export class CreateStudentDto {
  @IsString()
  studentId: number;

  @IsString()
  userName: string;

  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;

  grade: Grade;

  createdQuestions?: Question[] = [];
}
