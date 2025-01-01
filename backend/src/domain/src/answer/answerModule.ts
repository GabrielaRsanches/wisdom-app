import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from '../../../infra/dataSource.module';
import { Answer } from './Answer';
import { AnswerService } from './answerService';
import { answersProviders } from '../../../infra/persistence/providers/answer.provider';
import { TeacherModule } from '../teacher/teacherModule';
import { QuestionModule } from '../question/questionModule';

@Module({
  imports: [
    Answer,
    DatabaseModule,
    forwardRef(() => TeacherModule),
    forwardRef(() => QuestionModule),
  ],
  controllers: [],
  providers: [...answersProviders, AnswerService],
  exports: [...answersProviders, AnswerService],
})
export class AnswerModule {}
