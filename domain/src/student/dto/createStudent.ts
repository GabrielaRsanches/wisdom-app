import { IsString, IsStrongPassword} from "class-validator";
import { v4 as uuidv4 } from 'uuid';
import { Question } from "src/question/Question";
import { Grade } from "../../../shared/enum";

export class CreateStudentDto {

  @IsString()
  studentId: uuidv4 

  @IsString()
  userName: string;

  @IsStrongPassword()
  password: string

  grade: Grade

  createdQuestions?: Question[] = []

}