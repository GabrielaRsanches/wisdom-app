import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Index,
} from 'typeorm';
import { QuestionEntity } from './QuestionEntity';
import { TeachingArea } from '../../../../../shared/enum';

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

  @OneToMany(() => QuestionEntity, (question) => question.answeredBy)
  answeredQuestions: QuestionEntity[];
}
