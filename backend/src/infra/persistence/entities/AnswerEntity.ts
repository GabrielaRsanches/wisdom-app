import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { QuestionEntity } from './QuestionEntity';

@Entity('answers')
export class AnswerEntity {
  @PrimaryGeneratedColumn()
  answerId: number;

  @Column({ type: 'text' })
  description: string;

  @ManyToOne(() => QuestionEntity, (question) => question.answers, {
    onDelete: 'CASCADE',
  })
  answeringTo: QuestionEntity;
}
