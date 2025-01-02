import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TeacherModule } from './domain/src/teacher/teacherModule';
import { DatabaseModule } from './infra/dataSource.module';
import { AppController } from './app.controller';
import { StudentModule } from './domain/src/student/studentModule';
import { QuestionModule } from './domain/src/question/questionModule';
import { AnswerModule } from './domain/src/answer/answerModule';

@Module({
  imports: [
    StudentModule,
    TeacherModule,
    QuestionModule,
    AnswerModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../../ui', 'dist'),
      exclude: ['/api*'],
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
