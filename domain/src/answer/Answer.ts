import { Question } from 'src/question/Question';
import { Student } from 'src/student/Student';
import { v4 as uuidv4 } from 'uuid';

export class Answer {
  private _answerId: uuidv4;
  private _text: string;
  public answeringTo: Question

  constructor(answerId: uuidv4, text: string, answeringTo: Question) {
    this._answerId = answerId;
    this._text = text;
    this.answeringTo = answeringTo;
  }

  get answerId(): Promise<Answer> {
    return this._answerId;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get getAnsweringTo(): Question {
    return this.answeringTo;
  }

  async editAnswer(newText: string): Promise<void> {
    this.text = newText;
  }

  async deleteAnswer(): Promise<void> {
    // Implementation to delete answer
  }
}
