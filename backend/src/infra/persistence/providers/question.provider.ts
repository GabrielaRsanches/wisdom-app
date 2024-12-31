import { DataSource } from 'typeorm';
import { QuestionEntity } from '../entities/QuestionEntity';

export const questionsProviders = [
  {
    provide: 'QUESTION_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(QuestionEntity),
    inject: ['DATA_SOURCE'],
  },
];
