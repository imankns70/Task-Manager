import { TaskStatus } from "./task-status";

export interface Task {
  id: number;
  title: string;
  statusId: number;     // <-- add this
  description: string;     // <-- add this
  status?: TaskStatus;  // optional navigation
}
