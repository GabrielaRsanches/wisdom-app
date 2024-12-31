import { IsString, IsEnum, IsNotEmpty } from 'class-validator';
import { Subject } from '../../../../../../shared/enum';
export class CreateQuestionDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  madeBy: number; // Student ID

  @IsNotEmpty()
  @IsEnum(Subject)
  subject: Subject;
}
