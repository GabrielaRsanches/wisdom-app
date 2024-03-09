import { TeachingArea, Grade } from '../../../domain/src/enum';
import {Email} from '../../../domain/src/interfaces'
import { Student } from '../../../domain/src/student/Student';
import FileUpload, { ConfirmedPassword } from '../shared/utils';


interface TeacherRegistry {
  teacherId: string;
  name: string;
  email: string;
  password: string; 
  confirmPassword: string;
  teachingAreas: TeachingArea[];
  credentials: typeof FileUpload;
  error: {}
}

interface StudentRegistry {
  name: string;
  email: Email;
  password: string;
  confirmPassword: ConfirmedPassword;
  grade: Grade;

  
}

interface Question {
  student: Student;
  title: string;
  description: string;
  answer?: Answer[]
}

interface Answer {
  question: Question;
  text: string
}

export type { TeacherRegistry, StudentRegistry, Question, Answer };
