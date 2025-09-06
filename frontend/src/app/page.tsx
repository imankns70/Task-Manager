"use client";

import { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  deleteTask,
  fetchStatuses,
} from "@/services/tasks.service";
import { Task } from "@/models/task";
import { TaskStatus } from "@/models/task-status";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [statuses, setStatuses] = useState<TaskStatus[]>([]);
  const [title, setTitle] = useState("");
  const [statusId, setStatusId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  // Load tasks + statuses on mount
  useEffect(() => {
    getTasks().then(setTasks).catch(console.error);
    fetchStatuses().then(setStatuses).catch(console.error);
  }, []);

  // Create new task
  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !statusId) return;

    setLoading(true);
    try {
      const newTask = await createTask({ title, statusId });
      setTasks((prev) => [...prev, newTask]);
      setTitle("");
      setStatusId(null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  // Delete task
  async function handleDelete(id: number) {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Task Manager ✅</h1>

      {/* Form */}
      <form onSubmit={handleCreate} className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <select
          value={statusId ?? ""}
          onChange={(e) => setStatusId(Number(e.target.value))}
          className="border p-2 rounded w-full"
        >
          <option value="">Select status</option>
          {statuses.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Adding..." : "Add Task"}
        </button>
      </form>

      {/* Tasks */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Tasks</h2>
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks found.</p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((t) => {
              debugger
              return (
                <li
                  key={t.id}
                  className="flex justify-between items-center p-3 bg-white rounded shadow"
                >
                  <span>
                    <strong>{t.title}</strong> —{" "}
                    <span className="italic text-sm text-gray-600">
                      {t.status?.name}
                    </span>
                  </span>
                  <button
                    onClick={() => handleDelete(t.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
