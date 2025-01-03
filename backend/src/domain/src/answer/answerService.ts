import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AnswerEntity } from '../../../infra/persistence/entities/AnswerEntity';
import { QuestionEntity } from '../../../infra/persistence/entities/QuestionEntity';
import { CreateAnswerDto } from './dto/createAnswer';
import { TeacherEntity } from '../../../infra/persistence/entities/TeacherEntity';

@Injectable()
export class AnswerService {
  constructor(
    @Inject('ANSWER_REPOSITORY')
    private readonly answerRepository: Repository<AnswerEntity>,
    @Inject('QUESTION_REPOSITORY')
    private readonly questionRepository: Repository<QuestionEntity>,
    @Inject('TEACHER_REPOSITORY')
    private readonly teacherRepository: Repository<TeacherEntity>,
  ) {}

  async createAnswer(
    createAnswerDto: CreateAnswerDto,
    teacherId: number,
    questionId: number,
  ): Promise<AnswerEntity> {
    const { description } = createAnswerDto;

    const question = await this.questionRepository.findOne({
      where: { questionId },
      relations: ['answersRelations'],
    });
    if (!question) {
      throw new Error('Question not found');
    }

    const teacher = await this.teacherRepository.findOne({
      where: { teacherId },
    });
    if (!teacher) {
      throw new Error('Teacher not found');
    }

    question.answeredBy = teacher;
    await this.questionRepository.save(question);

    const answer = this.answerRepository.create({
      description,
      answeringTo: question,
      answeredBy: teacher,
    });

    return this.answerRepository.save(answer);
  }
}
