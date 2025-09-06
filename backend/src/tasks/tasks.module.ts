import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "./entities/task.entity";
import { TasksController } from "./tasks.controller";
import { TaskStatusesController } from "./task-statuses.controller";
import { TasksService } from "./services/tasks.service";
import { TaskStatusesService } from "./services/task-statuses.service";
import { TaskStatus } from "./entities/task-status.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Task, TaskStatus])],
  providers: [TasksService, TaskStatusesService],
  controllers: [TasksController,TaskStatusesController],
})
export class TasksModule {}
