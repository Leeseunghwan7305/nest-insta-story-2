import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsString } from 'class-validator';

export class CreateDto {
  @ApiProperty({
    example: 24,
    description: '생성한시간이 유효기간내인 스토리만 보여집니다',
  })
  @IsIn([12, 24])
  validTime: 12 | 24;

  @ApiProperty({
    example: '어쩌다 Nest',
    description: '스토리 제목입니다',
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: '어쩌다',
    description: '스토리 작성자입니다',
  })
  @IsString()
  author: string;

  @ApiProperty({
    example:
      'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: '스토리 이미지입니다',
  })
  @IsString()
  image: string;

  @ApiProperty({
    example: ['#어쩌다', '#Nest', '#당근'],
    description: '스토리 해쉬태그입니다',
  })
  @IsString()
  hashtags: string[];
}
