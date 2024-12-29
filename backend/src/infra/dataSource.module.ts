import { Module } from '@nestjs/common';
import { databaseProviders } from './dataSource';
import { TeacherEntity } from './persistence/entities/TeacherEntity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionEntity } from './persistence/entities/QuestionEntity';
import { AnswerEntity } from './persistence/entities/AnswerEntity';
import { StudentEntity } from './persistence/entities/StudentEntity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [TeacherEntity, QuestionEntity, AnswerEntity, StudentEntity],
      synchronize: true,
      migrations: [__dirname + './migrations/*.ts'],
      logging: true,
    }),
  ],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
