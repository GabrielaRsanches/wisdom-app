import { DataSource } from 'typeorm';
import { StudentEntity } from './persistence/entities/StudentEntity';
import { AnswerEntity } from './persistence/entities/AnswerEntity';
import { QuestionEntity } from './persistence/entities/QuestionEntity';
import { TeacherEntity } from './persistence/entities/TeacherEntity';

import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [StudentEntity, AnswerEntity, QuestionEntity, TeacherEntity],
  synchronize: true,
  migrations: [__dirname + './migrations/*.ts'],
  logging: true,
});

if (!AppDataSource.isInitialized) {
  AppDataSource.initialize()
    .then(() => {
      console.log('Data Source has been initialized!');
    })
    .catch((err) => {
      console.error('Error during Data Source initialization', err);
    });
}

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
      }
      return AppDataSource;
    },
  },
];
