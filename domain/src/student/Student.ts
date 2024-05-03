import { v4 as uuidv4 } from 'uuid';
import { Question } from '../question/Question';
import { Grade } from '../../shared/enum';

export class Student {
  public readonly _studentId: uuidv4
  _password: string
  constructor(
    public userName: string,
    password: string,
    public grade: Grade,
    public createdQuestions?: Question[],
  ) {
    this._studentId = uuidv4()
    this._password = password
  }

  async changePassword(newPassword: string) {
    this._password = newPassword;
  }
  async changeUserName(userName: string) {
    this.userName = userName;
  }
  async deletedAccount() {}
}
