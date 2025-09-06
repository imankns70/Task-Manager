import { Task } from "@/models/task";
import { TaskStatus } from "@/models/task-status";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

if (!BASE_URL) {
  throw new Error(
    "NEXT_PUBLIC_API_URL is not defined in environment variables"
  );
}

export async function getTasks(): Promise<Task[]> {
  const res = await fetch(`${BASE_URL}/tasks`);
  if (!res.ok) throw new Error("Failed to fetch tasks");  
  return res.json();
}

export async function createTask(task: Omit<Task, "id">): Promise<Task> {
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  if (!res.ok) throw new Error("Failed to create task");
  return res.json();
}

export async function updateTask(
  id: number,
  updates: Partial<Omit<Task, "id">>
): Promise<Task> {
  const res = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  if (!res.ok) throw new Error("Failed to update task");
  return res.json();
}

export async function deleteTask(id: number): Promise<void> {
  const res = await fetch(`${BASE_URL}/tasks/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete task");
}

//task status
export async function fetchStatuses(): Promise<TaskStatus[]> {
  const res = await fetch(`${BASE_URL}/task-statuses`);
  debugger;
  return handleResponse<TaskStatus[]>(res);
}

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(errText || "Request failed");
  }
  return res.json();
}
