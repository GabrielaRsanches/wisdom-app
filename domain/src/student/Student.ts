import { Question } from '../question/Question';
import { Grade } from '../enum';

export class Student {
  constructor(
    private readonly studentId: string,
    private userName: string,
    private password: string,
    private grade: Grade,
    private readonly createdQuestions?: Question[],
  ) {
    this.studentId = '';
  }

  async changePassword(newPassword: string) {
    this.password = newPassword;
  }
  async changeUserName(userName: string) {
    this.userName = userName;
  }
  async deletedAccount() {}
}
