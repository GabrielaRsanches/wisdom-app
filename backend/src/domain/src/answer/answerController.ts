import { Controller, Post, Body, Param } from '@nestjs/common';
import { AnswerService } from './answerService';
import { CreateAnswerDto } from './dto/createAnswer';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post('create/:teacherId')
  async createAnswer(
    @Param('teacherId') teacherId: number,
    @Body() createAnswerDto: CreateAnswerDto,
  ) {
    return this.answerService.createAnswer(createAnswerDto, teacherId);
  }
}
