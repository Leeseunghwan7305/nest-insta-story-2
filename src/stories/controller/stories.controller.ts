import { Controller, Post, Body } from '@nestjs/common';
import { StoriesService } from '../service/stories.service';
import { CreateBoardRequestDto } from '../dto/story-create-request.dto';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { StoryEntity } from '../entities/story.entity';

@ApiTags('스토리 API')
@Controller('stories')
export class StoriesController {
  constructor(private readonly storiesService: StoriesService) {}

  @ApiOperation({
    summary: '스토리를 생성하는 API',
    description: '스토리를 생성한다.',
  })
  @ApiCreatedResponse({ description: '스토리를 생성한다', type: StoryEntity })
  @Post('/create')
  create(@Body() createStoryDto: CreateBoardRequestDto) {
    return this.storiesService.create(createStoryDto);
  }

  // @Get()
  // findAll() {
  //   return this.storiesService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.storiesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateStoryDto: UpdateStoryDto) {
  //   return this.storiesService.update(+id, updateStoryDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.storiesService.remove(+id);
  // }
}
