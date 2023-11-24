import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { StoryEntity } from './story.entity';

@Entity()
export class HashtagEntity {
  @PrimaryGeneratedColumn()
  hashTagId: number;

  @Column()
  hashTageName: string;

  @ManyToMany(() => StoryEntity, (StoryEntity) => StoryEntity.hashtags)
  @JoinTable()
  stories: StoryEntity[];
}
