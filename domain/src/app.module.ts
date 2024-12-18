import { Module } from '@nestjs/common';
import { TeacherModule } from './teacher/teacherModule';
import { StudentModule } from './student/studentModule';
import { TeacherService } from './teacher/teacherService';

@Module({
  imports: [TeacherModule, StudentModule],
  controllers: [],
  providers: [TeacherService],
})
export class AppModule {}
