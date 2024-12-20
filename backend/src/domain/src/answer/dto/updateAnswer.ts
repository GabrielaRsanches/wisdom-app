import { IsOptional, IsString } from 'class-validator';
import { Question } from '../../question/Question';

export class UpdateAnswerDto {
  @IsOptional()
  @IsString()
  description?: string;

  answeringTo: Question;
}
