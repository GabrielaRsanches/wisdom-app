import { IsString, IsUUID } from 'class-validator';
import { Question } from 'src/question/Question';
export class CreateAnswerDto {
  @IsUUID()
  answerId: number;

  @IsString()
  text: string;

  @IsUUID()
  answeringTo: Question;
}
