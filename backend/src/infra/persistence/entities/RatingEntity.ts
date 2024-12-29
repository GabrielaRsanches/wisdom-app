import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ratings')
export class RatingEntity {
  @PrimaryGeneratedColumn()
  ratingId: number;

  @Column()
  score: number;

  @Column({ type: 'text', nullable: true })
  comment: string;

  @Column()
  name: string;
}
