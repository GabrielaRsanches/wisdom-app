import { IsNumber, IsString, IsStrongPassword } from 'class-validator';
import { Grade } from '../../../../../../shared/enum';

export class UpdateStudentDto {
  @IsNumber()
  studentId: number;

  @IsString()
  userName: string;

  @IsStrongPassword()
  password: string;

  grade: Grade;
}
