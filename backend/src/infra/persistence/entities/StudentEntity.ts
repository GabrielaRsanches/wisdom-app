import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Grade } from '../../../../../shared/enum';
import { QuestionEntity } from './QuestionEntity';

@Entity('students')
export class StudentEntity {
  @PrimaryGeneratedColumn()
  studentId: number;

  @Column({ type: 'varchar', length: 100 })
  userName: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'enum', enum: Grade })
  grade: Grade;

  @OneToMany(() => QuestionEntity, (question) => question.madeBy, {
    cascade: true,
  })
  createdQuestions: QuestionEntity[];
}
