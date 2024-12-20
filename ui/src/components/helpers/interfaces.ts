import { Teacher } from '../../../../backend/src/domain/src/teacher/Teacher'
import { TeachingArea, Grade } from '../../../../shared/enum'
import { Email } from '../../../../shared/interfaces'; 
import { Student } from '../../../../backend/domain/src/student/Student';
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

interface Question {
  madeBy: Student;
  title: string;
  description: string;
  answer?: Answer[];
  answeredBy?: Teacher
}

interface Answer {
  question: Question;
  text: string
}

export type { TeacherRegistry, StudentRegistry, Question, Answer };
