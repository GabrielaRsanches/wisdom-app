import { Question } from '../question/Question';
import { Grade } from '../../shared/enum';

export class Student {
  private readonly studentId: number;
  private password: string;

  constructor(
    public userName: string,
    password: string,
    public grade: Grade,
    public createdQuestions?: Question[],
  ) {
    this.password = password;
  }

  get getId() {
    return this.studentId;
  }

  get getPassword() {
    return this.password;
  }

  async changePassword(newPassword: string) {
    this.password = newPassword;
  }
  async changeUserName(userName: string) {
    this.userName = userName;
  }
  async deletedAccount() {}
}
