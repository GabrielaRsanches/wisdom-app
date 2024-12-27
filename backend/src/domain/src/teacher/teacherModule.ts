import { Module } from '@nestjs/common';
import { Teacher } from './Teacher';
import { TeacherController } from './teacherController';
import { TeacherService } from './teacherService';
@Module({
  imports: [Teacher],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
