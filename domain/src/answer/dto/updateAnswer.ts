import { IsOptional, IsString } from 'class-validator';
import { Question } from 'src/question/Question';

export class UpdateAnswerDto {
  @IsOptional()
  @IsString()
  description?: string;

  answeringTo: Question;
}
