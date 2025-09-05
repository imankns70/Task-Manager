import { IsIn, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task.entity/task.entity';

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
