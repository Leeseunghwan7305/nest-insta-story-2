import { Injectable } from '@nestjs/common';
import { CreateBoardRequestDto } from '../dto/story-create-request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoryEntity } from '../entities/story.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { HashtagEntity } from '../entities/hashtag.entity';

@Injectable()
export class StoriesService {
  constructor(
    @InjectRepository(StoryEntity)
    private readonly storyRepository: Repository<StoryEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  id = 1;
  async create(createStoryDto: CreateBoardRequestDto) {
    //로그인 유무 확인
    const isUser = await this.userRepository.findOne({
      where: { userId: createStoryDto.userId },
    });
    if (!isUser) return;

    const newStory = new StoryEntity();

    newStory.storyId = this.id++;
    newStory.validTime = createStoryDto.validTime;
    newStory.title = createStoryDto.title;
    newStory.author = createStoryDto.author;
    newStory.image = createStoryDto.image;
    newStory.creator = isUser;
    newStory.hashtags = createStoryDto.hashtags.map((hashtag) => {
      const hash = new HashtagEntity();
      hash.hashTageName = hashtag;
      return hash;
    });

    console.log(newStory);
    return await this.storyRepository.save(newStory);
  }
  async update(createStoryDto: CreateBoardRequestDto) {
    console.log(createStoryDto);
  }
  // findAll() {
  //   return `This action returns all stories`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} story`;
  // }

  // update(id: number, updateStoryDto: UpdateStoryDto) {
  //   return `This action updates a #${id} story`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} story`;
  // }
}
