import { DataSource } from 'typeorm';
import { AnswerEntity } from '../entities/AnswerEntity';

export const answersProviders = [
  {
    provide: 'ANSWER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(AnswerEntity),
    inject: ['DATA_SOURCE'],
  },
];
