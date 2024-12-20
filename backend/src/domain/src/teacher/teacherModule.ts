import { Module } from '@nestjs/common';
import { CreateTeacherDto, TeacherLoginDto } from './dto';
import { Teacher } from './Teacher';
import { TeacherController } from './teacherController';
import { StudentService } from '../student/studentService';

@Module({
  imports: [Teacher, CreateTeacherDto, TeacherLoginDto],
  controllers: [TeacherController],
  providers: [StudentService],
})
export class TeacherModule {}
