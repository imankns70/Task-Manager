// frontend/src/models/task.ts
export interface Task {
  id: number;
  title: string;
  description: string;
  completed?: boolean; // optional field
}
