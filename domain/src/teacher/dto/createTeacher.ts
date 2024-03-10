import { IsNumber, IsString, IsStrongPassword, IsUUID } from "class-validator";
import { UUID } from "crypto";
import { Question } from "src/question/Question";
import { TeachingArea } from "src/shared/enum";


export class CreateTeacherDto {

  @IsUUID()
  teacherId: UUID;

  @IsString()
  name: string;

  @IsStrongPassword()
  password: string;

  credentials: Credential[];

  teachingArea: TeachingArea[];

  @IsNumber()
  score?: number = 0

  answeredQuestions?: Question[] = []

}