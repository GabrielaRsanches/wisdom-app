import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Index,
} from 'typeorm';
import { TeachingArea } from '../../../../../shared/enum';
import { AnswerEntity } from './AnswerEntity';

@Entity('teachers')
@Index('idx_teacher_email', ['email'], { unique: true })
@Index('idx_teacher_score', ['score'])
export class TeacherEntity {
  @PrimaryGeneratedColumn()
  teacherId: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column('jsonb')
  credentials: Credential[];

  @Column('jsonb')
  teachingAreas: TeachingArea[];

  @Column({ default: 0 })
  score: number;

  @OneToMany(() => AnswerEntity, (answer) => answer.answeredBy)
  answers: AnswerEntity[];
}
