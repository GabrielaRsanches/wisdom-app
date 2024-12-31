import { forwardRef, Module } from '@nestjs/common';
import { Student } from './Student';
import { StudentController } from './studentController';
import { studentProviders } from '../../../infra/persistence/providers/student.provider';
import { DatabaseModule } from '../../../infra/dataSource.module';
import { StudentService } from './studentService';
import { QuestionModule } from '../question/questionModule';

@Module({
  imports: [Student, DatabaseModule, forwardRef(() => QuestionModule)],
  controllers: [StudentController],
  providers: [...studentProviders, StudentService],
  exports: [...studentProviders, StudentService],
})
export class StudentModule {}
