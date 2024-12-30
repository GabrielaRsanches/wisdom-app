import { DataSource } from 'typeorm';
import { StudentEntity } from '../entities/StudentEntity';

export const studentProviders = [
  {
    provide: 'STUDENT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(StudentEntity),
    inject: ['DATA_SOURCE'],
  },
];
