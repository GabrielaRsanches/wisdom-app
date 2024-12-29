import { Question } from '../question/Question';
import { TeachingArea } from '../../../../../shared/enum';
import { TeacherInterface, Credential } from '../../../../../shared/interfaces';
import bcrypt from 'bcrypt';

export class Teacher implements TeacherInterface {
  private readonly teacherId: number;
  private password: string;

  constructor(
    public name: string,
    public email: string,
    password: string,
    public credentials: Credential[],
    public teachingAreas: TeachingArea[],
    public score: number = 0,
    public answeredQuestions: Question[] = [],
  ) {
    this.password = password;
  }

  async comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }

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
