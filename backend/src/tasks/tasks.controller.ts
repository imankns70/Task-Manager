import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { TasksService } from "./services/tasks.service";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
   findAll() {
    // console.log("Fetching all tasks with 3s delay...");
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    return this.tasksService.findAll();
   
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.tasksService.findOne(+id);
  }

  @Post()
  create(@Body() dto: CreateTaskDto) {
    console.log(dto); 
    return this.tasksService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateTaskDto) {
    return this.tasksService.update(+id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.tasksService.remove(+id);
  }
}
