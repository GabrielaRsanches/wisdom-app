import { IsEmail } from 'class-validator';
import { Grade, Subject, TeachingArea } from './enum';
import { Question } from '../src/question/Question';
import { Student } from '../src/student/Student';
import { Answer } from '../src/answer/Answer';
import { Teacher } from '../src/teacher/Teacher';
export class Email {
  @IsEmail()
  email: string;
}

export interface TeacherInterface {
  teacherId: number;
  name: string;
  email: Email;
  password: string;
  credentials: Credential[];
  teachingArea: TeachingArea;
  score: number;
  answeredQuestions?: Question[];
}

export interface StudentInterface {
  studentId: number;
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
