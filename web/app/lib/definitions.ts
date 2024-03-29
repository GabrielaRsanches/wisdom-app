import { TeachingArea, Grade } from '../../../domain/src/enum';
import {Email} from '../../../domain/src/interfaces'
import { Student } from '../../../domain/src/student/Student';
import FileUpload, { ConfirmedPassword } from './utils';


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
  password: string;
  confirmPassword: ConfirmedPassword;
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

export { ConfirmedPassword };
