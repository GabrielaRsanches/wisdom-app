import { Injectable, NotFoundException } from '@nestjs/common';
import { Question } from './question';
import { CreateQuestionDto } from './dto/createQuestion';
import { Answer } from '../answer/Answer';
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

  findById(questionId: string): Question {
    return this.questions.find((question) => question.questionId === questionId);
  }

  delete(questionId: string): void {
    const index = this.questions.findIndex((question) => question.questionId === questionId);
    if (index === -1) {
      throw new NotFoundException('Question not found');
    }
    this.questions.splice(index, 1);
  }
}
