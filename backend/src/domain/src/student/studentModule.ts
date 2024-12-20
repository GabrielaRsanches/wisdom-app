import { Module } from '@nestjs/common';
import { CreateStudentDto, StudentLoginDto } from './dto';
import { Student } from './Student';
import { StudentController } from './studentController';

@Module({
  imports: [Student, CreateStudentDto, StudentLoginDto],
  controllers: [StudentController],
})
export class StudentModule {}
