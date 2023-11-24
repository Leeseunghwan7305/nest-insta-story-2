import { IsNumber } from 'class-validator';
import { CreateDto } from './story-create.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardRequestDto extends CreateDto {
  @ApiProperty({
    example: 1,
    description: '유저의 고유아이디입니다',
  })
  @IsNumber()
  userId: number;
}
