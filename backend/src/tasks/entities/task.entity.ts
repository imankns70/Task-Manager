import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TaskStatus } from "./task-status.entity";
 

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({ nullable: true })
  description?: string;

  @Column()              
  statusId!: number;

  @ManyToOne(() => TaskStatus, (status) => status.tasks, { eager: true })
  @JoinColumn({ name: 'statusId' })
  status!: TaskStatus;

  @CreateDateColumn()
  createdAt?: Date;
}
