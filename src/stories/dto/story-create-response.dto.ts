import { IsNumber } from 'class-validator';
import { CreateDto } from './story-create.dto';
import { CreateDateColumn } from 'typeorm';

export class CreateBoardResponseDto extends CreateDto {
  @IsNumber()
  storyId: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
