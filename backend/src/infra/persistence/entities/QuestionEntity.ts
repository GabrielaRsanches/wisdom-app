import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Subject } from '../../../../../shared/enum';
import { StudentEntity } from './StudentEntity';
import { TeacherEntity } from './TeacherEntity';
import { AnswerEntity } from './AnswerEntity';

@Entity('questions')
@Index('idx_question_createdAt', ['createdAt'])
@Index('idx_question_subject', ['subject'])
export class QuestionEntity {
  @PrimaryGeneratedColumn()
  questionId: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'enum', enum: Subject })
  subject: Subject;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => StudentEntity, (student) => student.createdQuestions, {
    onDelete: 'SET NULL',
  })
  madeBy: StudentEntity;

  @OneToMany(() => AnswerEntity, (answer) => answer.answeringTo, {
    cascade: true,
  })
  answers: AnswerEntity[];

  @ManyToOne(() => TeacherEntity, (teacher) => teacher.answers, {
    nullable: true,
  })
  @JoinColumn({ name: 'answeredBy' })
  answeredBy: TeacherEntity;
}
