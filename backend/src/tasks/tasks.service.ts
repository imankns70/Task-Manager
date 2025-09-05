import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.entity/task.entity';

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(Task)
        private taskRepo: Repository<Task>
    ) { }

    findAll(): Promise<Task[]> {
        return this.taskRepo.find();
    }

    findOne(id: number): Promise<Task | null> {
        return this.taskRepo.findOneBy({ id });
    }

    create(dto: CreateTaskDto): Promise<Task> {
        const task = this.taskRepo.create(dto);
        return this.taskRepo.save(task);
    }

    async update(id: number, dto: UpdateTaskDto): Promise<Task | null> {
        await this.taskRepo.update(id, dto);
        return this.findOne(id);
    }

    async remove(id: number) {
        await this.taskRepo.delete(id);

    }



}