import { IsString, IsStrongPassword } from 'class-validator';
import { Question } from '../../question/Question';
import { Grade } from '../../../../../../shared/enum';

export class CreateStudentDto {
  @IsString()
  studentId: number;

  @IsString()
  userName: string;

  @IsStrongPassword()
  password: string;

  grade: Grade;

  createdQuestions?: Question[] = [];
}
