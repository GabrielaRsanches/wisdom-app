import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from '../../../infra/dataSource.module';
import { Question } from './Question';
import { questionsProviders } from '../../../infra/persistence/providers/question.provider';
import { QuestionService } from './questionService';
import { StudentModule } from '../student/studentModule';

@Module({
  imports: [Question, DatabaseModule, forwardRef(() => StudentModule)],
  controllers: [],
  providers: [...questionsProviders, QuestionService],
  exports: [QuestionService],
})
export class QuestionModule {}
