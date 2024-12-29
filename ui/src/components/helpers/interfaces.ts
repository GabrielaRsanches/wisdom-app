
import { TeachingArea, Grade } from '@shared/enum'
import { Credential, StudentInterface, TeacherInterface } from '@shared/interfaces';
import { ConfirmedPassword } from '../helpers/utils';

interface TeacherRegistry {
  name: string;
  email: string;
  password: string; 
  confirmPassword: string;
  teachingAreas: TeachingArea[];
  credentials: Credential[];
}

interface StudentRegistry {
  name: string;
  email: string;
  password: string;
  confirmPassword: ConfirmedPassword;
  grade: Grade;
}


export interface TeacherLoginInterface {
  email: string;
  password: string;
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
