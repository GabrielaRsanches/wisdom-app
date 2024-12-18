import { Injectable, NotFoundException } from '@nestjs/common';
import { Question } from './question';
import { CreateQuestionDto } from './dto/createQuestion';
import { Student } from '../student/Student';

@Injectable()
export class QuestionService {
  private readonly questions: Question[] = [];

  create(createQuestionDto: CreateQuestionDto, madeBy: Student): Question {
    const question = new Question(
      createQuestionDto.title,
      createQuestionDto.description,
      madeBy,
      createQuestionDto.subject,
      createQuestionDto.answers,
    );
    this.questions.push(question);
    return question;
  }

  findAll(): Question[] {
    return this.questions;
  }

  findById(questionId: number): Question {
    return this.questions.find(
      (question) => question.getQuestionId === questionId,
    );
  }

  delete(questionId: number): void {
    const index = this.questions.findIndex(
      (question) => question.getQuestionId === questionId,
    );
    if (index === -1) {
      throw new NotFoundException('Question not found');
    }
    this.questions.splice(index, 1);
  }
}
