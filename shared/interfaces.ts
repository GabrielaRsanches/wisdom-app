import { Grade, Subject, TeachingArea } from './enum';
import { Question } from '../backend/src/domain/src/question/Question';
import { Student } from '../backend/src/domain/src/student/Student';
import { Answer } from '../backend/src/domain/src/answer/Answer';
import { Teacher } from '../backend/src/domain/src/teacher/Teacher';
import { IsEmail } from 'class-validator';

export interface TeacherInterface {
  getTeacherId(): number;
  name: string;
  email: string;
  getPassword(): string;
  credentials: Credential[];
  teachingAreas: TeachingArea[];
  score: number;
  answeredQuestions?: Question[];
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
  madeBy: Student;
  createdAt: Date;
  answers: Answer[];
  answeredBy?: Teacher;
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