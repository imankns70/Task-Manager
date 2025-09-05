"use client";

import { useEffect, useState } from "react";
import { getTasks, deleteTask, createTask } from "@/services/tasks.service";
import { Task } from "@/models/task";
import TaskCard from "@/components/TaskCard";
import TaskForm from "@/components/TaskForm";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTasks()
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // ✅ New: handleCreate function
  const handleCreate = async (task: { title: string; description: string }) => {
    try {
      const newTask = await createTask(task);
      setTasks((prev) => [...prev, newTask]);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  if (loading) return <div>Loading tasks...</div>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Welcome to Task Manager 🚀</h2>
      {/* Add Task Form */}
      <TaskForm onAdd={handleCreate} />
      {/* Task Grid */}
      <div className="grid grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
