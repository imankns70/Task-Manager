import { Injectable, OnModuleInit } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TaskStatus } from "../entities/task-status.entity";

@Injectable()
export class TaskStatusesService implements OnModuleInit {
  constructor(
    @InjectRepository(TaskStatus)
    private readonly statusRepository: Repository<TaskStatus>
  ) {}
  async onModuleInit() {
    const count = await this.statusRepository.count();
    if (count == 0) {
      await this.statusRepository.save([
        { name: "Todo" },
        { name: "In Progress" },
        { name: "Done" }
      ]);
    }
  }

  findAll(): Promise<TaskStatus[]> {
    return this.statusRepository.find();
  }
}
