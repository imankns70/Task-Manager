import { Controller, Get } from '@nestjs/common';
import { TaskStatusesService } from './services/task-statuses.service';
import { TaskStatus } from '../tasks/entities/task-status.entity';

@Controller('task-statuses')
export class TaskStatusesController {
  constructor(private readonly statusesService: TaskStatusesService) {}

  @Get()
  async getAll(): Promise<TaskStatus[]> {
    var result = this.statusesService.findAll();
    console.table(result)
    return result;
  }
}
