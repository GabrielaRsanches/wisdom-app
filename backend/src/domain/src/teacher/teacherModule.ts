import { Module } from '@nestjs/common';
import { Teacher } from './Teacher';
import { TeacherController } from './teacherController';
import { TeacherService } from './teacherService';
import { DatabaseModule } from '../../../infra/dataSource.module';
import { teacherProviders } from '../../../infra/persistence/providers/teacher.provider';
@Module({
  imports: [Teacher, DatabaseModule],
  controllers: [TeacherController],
  providers: [...teacherProviders, TeacherService],
})
export class TeacherModule {}
