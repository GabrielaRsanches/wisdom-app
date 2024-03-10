import { IsString, IsStrongPassword, IsUUID,  } from "class-validator";
import { UUID } from "crypto";
import { Grade } from "src/shared/enum";

export class UpdateStudentDto {

  @IsUUID()
  studentId: UUID;

  @IsString()
  userName: string;

  @IsStrongPassword()
  password: string

  grade: Grade

}