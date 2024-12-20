import { Answer } from '../answer/Answer';
import { Subject } from '../../../../../shared/enum';
import { Student } from '../student/Student';
import { Teacher } from '../teacher/Teacher';

export class Question {
  private readonly questionId: number;

  public readonly createdAt: Date;
  private title: string;
  private description: string;
  public readonly madeBy: Student;
  public readonly answers?: Answer[];
  public readonly answeredBy?: Teacher;
  public readonly subject: Subject;

  constructor(
    title: string,
    description: string,
    madeBy: Student,
    subject: Subject,
    answers: Answer[],
  ) {
    this.title = title;
    this.description = description;
    this.madeBy = madeBy;
    this.createdAt = new Date();
    this.answers = answers;
    this.subject = subject;
  }

  get getQuestionId(): number {
    return this.questionId;
  }

  get getTitle(): string {
    return this.title;
  }

  set setTitle(value: string) {
    this.title = value;
  }

  get getDescription(): string {
    return this.description;
  }

  set setDescription(value: string) {
    this.description = value;
  }

  get getMadeBy(): Student {
    return this.madeBy;
  }

  get getCreatedAt(): Date {
    return this.createdAt;
  }

  get getAnswers(): Answer[] {
    return this.answers;
  }

  get getAnsweredBy(): Teacher | undefined {
    return this.answeredBy;
  }

  async editQuestion(title: string, description: string): Promise<void> {
    this.title = title;
    this.description = description;
  }

  async deleteQuestion(): Promise<void> {
    // Implementation to delete question
  }
}
