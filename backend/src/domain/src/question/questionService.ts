import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { QuestionEntity } from '../../../infra/persistence/entities/QuestionEntity';
import { StudentEntity } from '../../../infra/persistence/entities/StudentEntity';
import { CreateQuestionDto } from './dto/createQuestion';

@Injectable()
export class QuestionService {
  constructor(
    @Inject('QUESTION_REPOSITORY')
    private readonly questionRepository: Repository<QuestionEntity>,
    @Inject('STUDENT_REPOSITORY')
    private readonly studentRepository: Repository<StudentEntity>,
  ) {}

  async createQuestion(
    createQuestionDto: CreateQuestionDto,
  ): Promise<QuestionEntity> {
    const { madeBy, title, description, subject } = createQuestionDto;

    const student = await this.studentRepository.findOne({
      where: { studentId: madeBy },
    });
    if (!student) {
      throw new NotFoundException(`Student with ID ${madeBy} not found`);
    }

    const question = this.questionRepository.create({
      title,
      description,
      subject,
      madeBy: student,
      createdAt: new Date(),
    });

    return this.questionRepository.save(question);
  }
}
