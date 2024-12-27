import { Question } from '../question/Question';
import { TeachingArea } from '../../../../../shared/enum';
import { TeacherInterface } from '../../../../../shared/interfaces';
export class Teacher implements TeacherInterface {
  private readonly teacherId: number;

  constructor(
    public name: string,
    public email: string,
    private password: string,
    public credentials: Credential[],
    public teachingArea: TeachingArea[],
    public score: number = 0,
    public answeredQuestions: Question[] = [],
  ) {}

  public getTeacherId(): number {
    return this.teacherId;
  }

  public getPassword(): string {
    return this.password;
  }

  async updateCredentials(credentials: Credential[]) {
    this.credentials = credentials;
  }

  async changePassword(newPassword: string) {
    this.password = newPassword;
  }

  async updateEmail(email: string) {
    this.email = email;
  }

  async deleteAccount() {}
}
