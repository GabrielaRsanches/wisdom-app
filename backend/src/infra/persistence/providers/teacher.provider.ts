import { DataSource } from 'typeorm';
import { TeacherEntity } from '../entities/TeacherEntity';

export const teacherProviders = [
  {
    provide: 'TEACHER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TeacherEntity),
    inject: ['DATA_SOURCE'],
  },
];
