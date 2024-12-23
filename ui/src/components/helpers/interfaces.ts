
import { TeachingArea, Grade } from '@shared/enum'
import { StudentInterface, TeacherInterface, Email } from '@shared/interfaces';
import FileUpload, { ConfirmedPassword } from '../helpers/utils';

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


export interface TeacherLoginInterface {
  email: Email;
  password: string;
  forgotPassword?: () => {};
}

interface Question {
  madeBy: StudentInterface;
  title: string;
  description: string;
  answer?: Answer[];
  answeredBy?: TeacherInterface
}

interface Answer {
  question: Question;
  text: string
}

export type { TeacherRegistry, StudentRegistry, Question, Answer };
