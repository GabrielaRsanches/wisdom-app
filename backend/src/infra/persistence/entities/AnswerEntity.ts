import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { QuestionEntity } from './QuestionEntity';
import { TeacherEntity } from './TeacherEntity';

@Entity('answers')
export class AnswerEntity {
  @PrimaryGeneratedColumn()
  answerId: number;

  @Column({ type: 'text' })
  description: string;

  @ManyToOne(() => QuestionEntity, (question) => question.answers)
  @JoinColumn({ name: 'answeringTo' })
  answeringTo: QuestionEntity;

  @ManyToOne(() => TeacherEntity, (teacher) => teacher.answers)
  @JoinColumn({ name: 'answeredBy' })
  answeredBy: TeacherEntity;
}
