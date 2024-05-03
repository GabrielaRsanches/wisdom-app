import { IsString } from "class-validator";
import { v4 as uuidv4 } from 'uuid';


export class StudentLoginDto {

  @IsString()
  studentId: uuidv4;

  @IsString()
  userName: string;

  password: string

}