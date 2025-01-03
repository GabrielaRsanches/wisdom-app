import { Controller, Post, Body, Param } from '@nestjs/common';
import { AnswerService } from './answerService';
import { CreateAnswerDto } from './dto/createAnswer';

@Controller('teachers')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post(':teacherId/questions/:questionId/answers')
  async createAnswer(
    @Param('teacherId') teacherId: number,
    @Param('questionId') questionId: number,
    @Body() createAnswerDto: CreateAnswerDto,
  ) {
    return this.answerService.createAnswer(
      createAnswerDto,
      teacherId,
      questionId,
    );
  }
}
