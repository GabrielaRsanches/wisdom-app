import { Answer } from '../answer/Answer';
import { Subject } from '../../shared/enum';
import { Student } from '../student/Student';
import { Teacher } from '../teacher/Teacher';

export class Question {
  constructor(
    private readonly questionId: string,
    private subject: Subject[],
    private title: string,
    private description: string,
    private madeBy: Student,
    private readonly createdAt: Date,
    private answers: Answer[],
    private readonly answeredBy?: Teacher,
  ) {
    this.questionId = '';
    this.createdAt = new Date();
  }

  async createQuestion(title: string, description: string, madeBy: Student) {
    this.title = title;
    (this.description = description), (this.madeBy = madeBy);
  }
  async editQuestion(newTitle: string, newDescription: string) {
    this.title = newTitle;
    this.description = newDescription;
  }
  async answerQuestion(
    answer: Answer,
    questionId: string,
    description: string,
  ) {
    return answer.createAnswer(questionId, description);
  }
  async deleteQuestion(questionId: string) {}
}
