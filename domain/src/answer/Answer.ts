import { Question } from 'src/question/Question';
export class Answer {
  private readonly answerId: number;
  private description: string;
  public answeringTo: Question;

  constructor(answerId: number, description: string, answeringTo: Question) {
    this.answerId = answerId;
    this.description = description;
    this.answeringTo = answeringTo;
  }

  get getAnswerById(): number {
    return this.answerId;
  }

  get getAnswerDescription(): string {
    return this.description;
  }

  set setAnswerDescription(value: string) {
    this.description = value;
  }

  get getAnsweringTo(): Question {
    return this.answeringTo;
  }

  async createAnswer(
    description: string,
    answeringTo: Question,
  ): Promise<Partial<Answer>> {
    const answerCreated = {
      description: description,
      answeringTo: answeringTo,
    };

    return answerCreated;
  }

  async editAnswer(newText: string): Promise<void> {
    this.description = newText;
  }

  async deleteAnswer(): Promise<void> {
    // Implementation to delete answer
  }
}
