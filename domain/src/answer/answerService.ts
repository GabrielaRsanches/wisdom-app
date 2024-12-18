import { Injectable, NotFoundException } from '@nestjs/common';
import { Answer } from './answer';
import { CreateAnswerDto } from './dto/createAnswer';
@Injectable()
export class AnswerService {
  private readonly answers: Answer[] = [];

  create(createAnswerDto: CreateAnswerDto): Answer {
    const answer = new Answer(
      createAnswerDto.answerId,
      createAnswerDto.text,
      createAnswerDto.answeringTo,
    );
    this.answers.push(answer);
    return answer;
  }

  findAll(): Answer[] {
    return this.answers;
  }

  findById(answerId: number): Answer {
    return this.answers.find((answer) => answer.getAnswerById === answerId);
  }

  delete(answerId: number): void {
    const index = this.answers.findIndex(
      (answer) => answer.getAnswerById === answerId,
    );
    if (index === -1) {
      throw new NotFoundException('Answer not found');
    }
    this.answers.splice(index, 1);
  }
}
