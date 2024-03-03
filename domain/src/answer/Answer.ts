export class Answer {
  constructor(
    private readonly studentId: string,
    private text: string,
    private answeringTo: string,
  ) {
    this.studentId = '';
  }

  async createAnswer(questionId: string, text: string) {
    this.answeringTo = questionId;
    this.text = text;
  }
  async editAnswer(newText: string) {
    this.text = newText;
  }
  async deleteAnswer(answerId: string) {}
}
