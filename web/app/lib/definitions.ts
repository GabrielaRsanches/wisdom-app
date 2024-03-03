import { TeachingArea, Grade } from '../../../domain/src/enum';
import {Email} from '../../../domain/src/interfaces'
import { Student } from '../../../domain/src/student/Student';
import FileUpload from './utils';
export class ConfirmedPassword {
  arePasswordsMatching(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
  };
  constructor(readonly passwordOne: string, readonly passwordTwo: string,  arePasswordsMatching: boolean = false){
    arePasswordsMatching = this.arePasswordsMatching(passwordOne, passwordOne)
  }
}

export interface TeacherRegistry {
  name: string;
  email: Email;
  password: string;
  confirmPassword: ConfirmedPassword;
  teachingAreas: TeachingArea[];
  credentials: typeof FileUpload
}

export interface StudentRegistry {
  name: string;
  email: Email;
  password: ConfirmedPassword;
  confirmPassword: string;
  grade: Grade;

  
}

export interface Question {
  student: Student;
  title: string;
  description: string;
  answer?: Answer[]
}

export interface Answer {
  question: Question;
  text: string
}