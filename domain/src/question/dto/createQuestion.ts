import { IsString, IsArray } from 'class-validator';
import { Subject } from '../../../shared/enum';
import { v4 as uuidv4 } from 'uuid';
import { Answer } from 'src/answer/Answer';
export class CreateQuestionDto {

  @IsString()
  questionId: uuidv4;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsArray()
  subject: Subject;

  answers: Answer[] = []
}
