import { Question } from '../question/Question';
import { TeachingArea } from '../../../../../shared/enum';
import { Email } from '../../../../../shared/interfaces';
export class Teacher {
  private readonly teacherId: number;

  constructor(
    public name: string,
    public email: Email,
    private password: string,
    public credentials: string[],
    public teachingArea: TeachingArea[],
    public score: number = 0,
    public answeredQuestions: Question[] = [],
  ) {}

  get getTeacherId(): number {
    return this.teacherId;
  }

  get getPassword(): string {
    return this.password;
  }

  async updateCredentials(credentials: string[]) {
    this.credentials = credentials;
  }

  async changePassword(newPassword: string) {
    this.password = newPassword;
  }

  async updateEmail(email: Email) {
    this.email = email;
  }

  async deleteAccount() {}
}
