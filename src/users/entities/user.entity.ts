import { BaseEntity } from 'src/common/entity/base.entity';
import { StoryEntity } from 'src/stories/entities/story.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  userId: number;
  @Column()
  userName: string;

  @OneToMany(() => StoryEntity, (story) => story.creator)
  stories: StoryEntity[];
}
