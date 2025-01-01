import { forwardRef, Module } from '@nestjs/common';
import { Teacher } from './Teacher';
import { TeacherController } from './teacherController';
import { TeacherService } from './teacherService';
import { DatabaseModule } from '../../../infra/dataSource.module';
import { teacherProviders } from '../../../infra/persistence/providers/teacher.provider';
import { AnswerModule } from '../answer/answerModule';
@Module({
  imports: [Teacher, DatabaseModule, forwardRef(() => AnswerModule)],
  controllers: [TeacherController],
  providers: [...teacherProviders, TeacherService],
  exports: [...teacherProviders, TeacherService],
})
export class TeacherModule {}
