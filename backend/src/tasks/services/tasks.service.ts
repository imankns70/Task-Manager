import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateTaskDto } from "../dto/create-task.dto";
import { UpdateTaskDto } from "../dto/update-task.dto";
import { Task } from "../entities/task.entity";

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepo: Repository<Task>
  ) {}

  findAll(): Promise<Task[]> {
    return this.taskRepo.find();
  }

  findOne(id: number): Promise<Task | null> {
    return this.taskRepo.findOneBy({ id });
  }

  async create(dto: CreateTaskDto): Promise<Task | null> {
    const task = this.taskRepo.create(dto);
    const savedTask = await this.taskRepo.save(task);

    // Reload with relation
    return this.taskRepo.findOne({
      where: { id: savedTask.id },
      relations: ["status"], // make sure status is included
    });
  }

  async update(id: number, dto: UpdateTaskDto): Promise<Task | null> {
    await this.taskRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.taskRepo.delete(id);
  }
}
