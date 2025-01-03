import { Grade, Subject, TeachingArea } from './enum';
import { Question } from '../backend/src/domain/src/question/Question';
import { Answer } from '../backend/src/domain/src/answer/Answer';

export interface TeacherInterface {
  getTeacherId(): number;
  name: string;
  email: string;
  getPassword(): string;
  credentials: Credential[];
  teachingAreas: TeachingArea[];
  score: number;
  answers?: Answer[];
}

export interface StudentInterface {
  studentId: number;
  email: string;
  userName: string;
  password: string;
  grade: Grade;
  createdQuestions?: Question[];
}

export interface QuestionInterface {
  questionId: number;
  subject: Subject[];
  title: string;
  description: string;
  madeBy: number;
  createdAt: Date;
  answers?: Answer[];
  answeredBy?: number;
}

export interface AnswerInterface {
  answerId: number;
  description: string;
  answeringTo: number; //questionId
  answeredBy: number; //teacherId
}

export interface Credential {
  id: string;
  name: string;
  type: string;
  url: string;
  uploadedAt: Date;
  isVerified: boolean;
  verifiedAt?: Date;
  remarks?: string;
}