import { Question } from '../question/Question';
import { Grade } from '../../../../../shared/enum';
import bcrypt from 'bcrypt';

export class Student {
  private readonly studentId: number;
  private password: string;

  constructor(
    public userName: string,
    password: string,
    public grade: Grade,
    public createdQuestions?: Question[],
  ) {
    this.setPassword(password);
  }

  async setPassword(password: string) {
    this.password = await bcrypt.hash(password, 10);
  }

  async comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }

  async changePassword(newPassword: string) {
    await this.setPassword(newPassword);
  }

  get getId() {
    return this.studentId;
  }

  get getPassword() {
    return this.password;
  }

  async changeUserName(userName: string) {
    this.userName = userName;
  }
  async deletedAccount() {}
}
