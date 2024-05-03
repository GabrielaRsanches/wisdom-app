
import { Question } from '../question/Question';
import { TeachingArea } from '../../shared/enum';
import { Email } from '../../shared/interfaces';
import { v4 as uuidv4 } from 'uuid';
export class Teacher {
  private _teacherId: uuidv4
  private _password: string
  constructor(
    public name: string,
    public email: Email,
    password: string, 
    public credentials: string[],
    public teachingArea: TeachingArea[],
    public score: number = 0,
    public answeredQuestions: Question[] = [],
  ) {
    this._teacherId = uuidv4();
    this._password = password;
  }

  get teacherId(): string {
    return this._teacherId;
  }

  get password(): string {
    return this._password;
  }

  async updateCredentials(credentials: string[]) {
    this.credentials = credentials;
  }

  async changePassword(newPassword: string) {
    this._password = newPassword;
  }

  async updateEmail(email: Email) {
    this.email = email;
  }

  async deleteAccount() {

  }
}
