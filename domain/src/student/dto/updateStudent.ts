import { IsString, IsStrongPassword, IsUUID,  } from "class-validator";
import { uuidv4 } from "uuid";
import { Grade } from "../../../shared/enum";

export class UpdateStudentDto {

  @IsString()
  studentId: uuidv4;

  @IsString()
  userName: string;

  @IsStrongPassword()
  password: string

  grade: Grade

}