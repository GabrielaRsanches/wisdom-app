import { IsString, IsStrongPassword, IsUUID,  } from "class-validator";
import { UUID, randomUUID } from "crypto";
import { Question } from "src/question/Question";
import { Grade } from "src/shared/enum";

export class CreateStudentDto {

  @IsUUID()
  studentId: UUID 

  @IsString()
  userName: string;

  @IsStrongPassword()
  password: string

  grade: Grade

  createdQuestions?: Question[] = []

}