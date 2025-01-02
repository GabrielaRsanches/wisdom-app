import { IsEmail, IsNumber, IsString, IsStrongPassword } from 'class-validator';
import { TeachingArea } from '../../../../../../shared/enum';
import { Credential } from '../../../../../../shared/interfaces';
import { Answer } from '../../answer/Answer';

export class CreateTeacherDto {
  @IsString()
  teacherId: number;

  @IsString()
  name: string;

  @IsStrongPassword()
  password: string;

  @IsEmail()
  email: string;

  credentials: Credential[];

  teachingAreas: TeachingArea[];

  @IsNumber()
  score?: number = 0;

  answers: Answer[] = [];
}
