import { IsEmail, IsUUID,  } from "class-validator";
import { v4 as uuidv4 } from 'uuid';
import { Email } from "shared/interfaces";

export class TeacherLoginDto {

  @IsUUID()
  teacherId: uuidv4;

  @IsEmail()
  email: Email;

  password: string

}