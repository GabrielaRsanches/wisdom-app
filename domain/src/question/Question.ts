import { v4 as uuidv4 } from 'uuid';
import { Answer } from '../answer/Answer';
import { Subject } from '../../shared/enum';
import { Student } from '../student/Student';
import { Teacher } from '../teacher/Teacher';

export class Question {
  private readonly _questionId: string;
  private readonly _createdAt: Date;
  private _title: string;
  private _description: string;
  private _madeBy: Student;
  private _answers?: Answer[];
  private _answeredBy?: Teacher;
  public subject: Subject

  constructor(
    title: string,
    description: string,
    madeBy: Student,
    subject: Subject,
    answers: Answer[]
  ) {
    this._questionId = uuidv4();
    this._title = title;
    this._description = description;
    this._madeBy = madeBy;
    this._createdAt = new Date();
    this._answers = answers;
    this.subject = subject
  }

  get questionId(): string {
    return this._questionId;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get madeBy(): Student {
    return this._madeBy;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get answers(): Answer[] {
    return this._answers;
  }

  get answeredBy(): Teacher | undefined {
    return this._answeredBy;
  }

  async editQuestion(title: string, description: string): Promise<void> {
    this.title = title;
    this.description = description;
  }

  async answerQuestion(answer: Answer, description: string): Promise<void> {
    answer.createAnswer(this.questionId, description);
  }

  async deleteQuestion(): Promise<void> {
    // Implementation to delete question
  }
}

