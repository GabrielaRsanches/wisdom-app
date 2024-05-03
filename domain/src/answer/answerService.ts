import { Injectable, NotFoundException } from '@nestjs/common';
import { Answer } from './answer';
import { CreateAnswerDto } from './dto/createAnswer';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class AnswerService {
  private readonly answers: Answer[] = []

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

  findById(answerId: uuidv4): Answer {
    return this.answers.find((answer) => answer.answerId === answerId);
  }

  delete(answerId: uuidv4): void {
    const index = this.answers.findIndex((answer) => answer.answerId === answerId);
    if (index === -1) {
      throw new NotFoundException('Answer not found');
    }
    this.answers.splice(index, 1);
  }
}
