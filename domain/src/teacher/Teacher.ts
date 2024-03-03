import { Question } from '../question/Question';
import { TeachingArea } from '../enum';
import { Email } from '../interfaces';

export class Teacher {
  constructor(
    private readonly teacherId: string,
    private name: string,
    private email: Email,
    private password: string,
    private credentials: Credential[],
    private teachingArea: TeachingArea[],
    private score: number,
    private answeredQuestions?: Question[],
  ) {
    this.score = 0;
    this.teacherId = '';
  }

  async createTeacher(
    name: string,
    email: string,
    password: string,
    credentials: Credential[],
    TeachingArea: TeachingArea[],
  ) {}
  async editCredentials(credentials: Credential[]) {
    this.credentials = credentials;
  }
  async changePassword(newPassword: string) {
    this.password = newPassword;
  }
  async updateEmail(email: Email) {
    this.email = email;
  }
  async deletedAccount() {}
}
