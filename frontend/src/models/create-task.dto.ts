// models/create-task.dto.ts
export interface CreateTaskDto {
  title: string;
  description?: string;
  statusId?: number;
}
