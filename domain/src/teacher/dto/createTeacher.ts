import { IsEmail, IsNumber, IsString, IsStrongPassword } from "class-validator";
import { v4 as uuidv4 } from 'uuid';
import { Email } from "shared/interfaces";
import { Question } from "src/question/Question";
import { TeachingArea } from "../../../shared/enum";


export class CreateTeacherDto {

  @IsString()
  teacherId: uuidv4;

  @IsString()
  name: string;

  @IsStrongPassword()
  password: string;

  @IsEmail()
  email: Email

  credentials: string[];

  teachingArea: TeachingArea[];

  @IsNumber()
  score?: number = 0

  answeredQuestions?: Question[] = []

}