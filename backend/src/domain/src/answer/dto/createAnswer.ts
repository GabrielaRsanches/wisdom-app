import { IsString, IsUUID } from 'class-validator';
import { Question } from '../../question/Question';
export class CreateAnswerDto {
  @IsUUID()
  answerId: number;

  @IsString()
  text: string;

  @IsUUID()
  answeringTo: Question;
}
