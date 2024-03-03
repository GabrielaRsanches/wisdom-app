import { IsEmail } from 'class-validator';
import { Grade, Subject, TeachingArea } from './enum';
import { Question } from './question/Question';
import { Student } from './student/Student';
import { Answer } from './answer/Answer';
import { Teacher } from './teacher/Teacher';
export class Email {
  @IsEmail()
  email: string;
}

export interface TeacherInterface {
  readonly teacherId: string;
  name: string;
  email: Email;
  password: string;
  credentials: Credential[];
  teachingArea: TeachingArea;
  score: number;
  answeredQuestions?: Question[];
}

export interface StudantInterface {
  readonly studentId: string,
  userName: string,
  password: string,
  grade: Grade,
  readonly createdQuestions?: Question[]
}

export interface QuestionInterface{
  readonly questionId: string,
  subject: Subject[],
  title: string,
  description: string,
  madeBy: Student,
  readonly createdAt: Date,
  answers: Answer[],
  readonly answeredBy?: Teacher
}

