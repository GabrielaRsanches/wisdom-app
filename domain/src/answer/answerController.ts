import { Controller, Get, Post, Body, Param, Delete, NotFoundException } from '@nestjs/common';
import { AnswerService } from './answerService';
import { CreateAnswerDto } from './dto/createAnswer';
import { Answer } from './answer';
import { UpdateAnswerDto } from './dto/updateAnswer';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post()
  async create(@Body() createAnswerDto: CreateAnswerDto): Promise<Answer> {
    return this.answerService.create(createAnswerDto);
  }

  @Get()
  async findAll(): Promise<Answer[]> {
    return this.answerService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') answerId: string): Promise<Answer> {
    const answer = this.answerService.findById(answerId);
    if (!answer) {
      throw new NotFoundException('Answer not found');
    }
    return answer;
  }

  @Delete(':id')
  async delete(@Param('id') answerId: string): Promise<void> {
    this.answerService.delete(answerId);
  }

  async update(answerId: string, updateAnswerDto: UpdateAnswerDto): Promise<Answer> {
    const answer = this.findById(answerId);
    if (!answer) {
      throw new NotFoundException('Answer not found');
    }
    if (updateAnswerDto.text !== undefined) {
      (await answer).text = updateAnswerDto.text;
    }
    if (updateAnswerDto.answeringTo !== undefined) {
      (await answer).answeringTo = updateAnswerDto.answeringTo;
    }
    return answer;
  }
}
