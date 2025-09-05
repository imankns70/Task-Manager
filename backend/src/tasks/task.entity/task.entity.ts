import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type TaskStatus = 'todo' | 'in-progress' | 'done';

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    title?: string;

    @Column({ nullable: true })
    description?: string;

    @Column({ default: 'todo' })
    status?: TaskStatus;

    @CreateDateColumn()
    createdAt?: Date;
}
