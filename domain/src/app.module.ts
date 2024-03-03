import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Teacher } from './teacher/Teacher';
import { Student } from './student/Student';
import { Question } from './question/Question';
import { Answer } from './answer/Answer';

@Module({
  imports: [Teacher, Student, Question, Answer],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
