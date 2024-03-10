import { UUID } from 'crypto';
import { Question } from '../question/Question';
import { Grade } from '../shared/enum';

export class Student {
  constructor(
    private readonly studentId: UUID,
    private userName: string,
    private password: string,
    private grade: Grade,
    private readonly createdQuestions?: Question[],
  ) {
    this.studentId = `${''}-${''}-${''}-${''}-${''}`;
  }

  async changePassword(newPassword: string) {
    this.password = newPassword;
  }
  async changeUserName(userName: string) {
    this.userName = userName;
  }
  async deletedAccount() {}
}
