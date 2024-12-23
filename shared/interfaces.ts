import { Grade, Subject, TeachingArea } from './enum';
import { Question } from '../backend/src/domain/src/question/Question';
import { Student } from '../backend/src/domain/src/student/Student';
import { Answer } from '../backend/src/domain/src/answer/Answer';
import { Teacher } from '../backend/src/domain/src/teacher/Teacher';
import { IsEmail } from 'class-validator';

export class Email {
  @IsEmail()
  email: string;

  constructor(email: string) {
    this.email = email;
  }
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
