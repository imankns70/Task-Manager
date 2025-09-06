import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Task } from './task.entity';

@Entity()
export class TaskStatus {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true })
  name?: string; // e.g., "Pending", "In Progress", "Completed"

  @OneToMany(() => Task, (task) => task.status)
  tasks?: Task[];
}
