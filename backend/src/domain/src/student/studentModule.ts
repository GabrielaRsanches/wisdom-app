import { Module } from '@nestjs/common';
import { Student } from './Student';
import { StudentController } from './studentController';
import { studentProviders } from '../../../infra/persistence/providers/student.provider';
import { DatabaseModule } from '../../../infra/dataSource.module';
import { StudentService } from './studentService';

@Module({
  imports: [Student, DatabaseModule],
  controllers: [StudentController],
  providers: [...studentProviders, StudentService],
})
export class StudentModule {}
