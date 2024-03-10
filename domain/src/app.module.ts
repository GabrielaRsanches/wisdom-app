import { Module } from '@nestjs/common';
import { TeacherModule } from './teacher/teacherModule';
import { StudentModule } from './student/studentModule';
import { AppController } from './app.controller';
import { TeacherService } from './teacher/teacherService';

@Module({
  imports: [TeacherModule, StudentModule],
  controllers: [AppController],
  providers: [TeacherService]
})
export class AppModule {}

