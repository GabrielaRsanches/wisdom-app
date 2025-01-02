import { IsString } from 'class-validator';

export class CreateAnswerDto {
  @IsString()
  description: string;

  answeringTo: number; //questionId
  answeredBy: number; //teacherId
}
