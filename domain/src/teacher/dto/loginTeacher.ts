import { IsString, IsUUID,  } from "class-validator";
import { UUID } from "crypto";
import { Question } from "src/question/Question";
import { Grade } from "src/shared/enum";

export class TeacherLoginDto {

  @IsUUID()
  teacherId: UUID;

  @IsString()
  name: string;

  password: string

}