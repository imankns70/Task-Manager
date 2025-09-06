import { IsIn, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../entities/task-status.entity';

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsIn(['todo', 'in-progress', 'done'])
  status?: TaskStatus;
}
