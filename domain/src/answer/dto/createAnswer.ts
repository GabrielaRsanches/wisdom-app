import { IsString, IsUUID } from 'class-validator';
import { Question } from 'src/question/Question';
import { v4 as uuidv4 } from 'uuid';
export class CreateAnswerDto {
  @IsUUID()
  answerId: uuidv4;

  @IsString()
  text: string;

  @IsUUID()
  answeringTo: Question;
}
