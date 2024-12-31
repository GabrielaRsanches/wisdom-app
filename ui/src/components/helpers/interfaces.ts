
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
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  grade: Grade;
}


export interface TeacherLoginInterface {
  email: string;
  password: string;
}

export interface StudentLoginInterface {
  email: string;
  password: string;
}

interface Question {
  madeBy: number;
  title: string;
  description: string;
  answers?: Answer[];
  answeredBy?: TeacherInterface
}

interface Answer {
  question: Question;
  text: string
}

export type { TeacherRegistry, StudentRegistry, Question, Answer };
