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

  @Column({ nullable: true })
  statusId?: number;

  @ManyToOne(() => TaskStatus, (status) => status.tasks, { eager: true })
  @JoinColumn({ name: "statusId" })
  status?: TaskStatus;

  @CreateDateColumn()
  createdAt?: Date;
}
