import { BaseEntity } from 'src/common/entity/base.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { HashtagEntity } from './hashtag.entity';
import { UserEntity } from 'src/users/entities/user.entity';

@Entity()
export class StoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  storyId: number;

  @Column()
  validTime: 12 | 24;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  image: string;

  @ManyToMany(() => HashtagEntity, (hashtag) => hashtag.stories, {
    cascade: true,
  })
  @JoinTable()
  hashtags: HashtagEntity[];

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'userId' })
  creator: UserEntity;
}
