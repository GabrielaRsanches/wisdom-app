import { IsString, IsArray, IsNumber } from 'class-validator';
import { Subject } from '../../../../../../shared/enum';
import { Answer } from '../../answer/Answer';
export class CreateQuestionDto {
  @IsNumber()
  questionId: number;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsArray()
  subject: Subject;

  answers: Answer[] = [];
}
