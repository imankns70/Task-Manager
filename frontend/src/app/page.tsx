"use client";

import { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  deleteTask,
  fetchStatuses,
} from "@/services/tasks.service";
import { Task } from "@/models/task";
import CardList from "@/components/CardList";
import Pagination from "@/components/Pagination";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [statuses, setStatuses] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // pagination + filtering
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [statusFilter, setStatusFilter] = useState<number | undefined>();

  // form state
  const [newTitle, setNewTitle] = useState("");
  const [newStatusId, setNewStatusId] = useState<number | undefined>();

  useEffect(() => {
    debugger
    loadTasks();
    fetchStatuses().then(setStatuses);
  }, [page, statusFilter]);

  async function loadTasks() {
    setLoading(true);
    try {
      const result = await getTasks(page, 5, statusFilter);
      setTasks(result.data);
      setTotalPages(result.totalPages);
    } finally {
      setLoading(false);
    }
  }

  // --- handle create
  async function handleCreate(title: string, statusId?: number) {
    setLoading(true);
    try {
      await createTask({ title, statusId });
      setNewTitle("");
      setNewStatusId(undefined);
      await loadTasks(); // reload tasks so pagination stays correct
    } finally {
      setLoading(false);
    }
  }

  // --- handle delete
  async function handleDelete(id: number) {
    setLoading(true);
    try {
      await deleteTask(id);
      await loadTasks();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6">
      {/* Create form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (newTitle.trim()) {
            handleCreate(newTitle, newStatusId);
          }
        }}
        className="flex gap-2 mb-6"
      >
        <input
          type="text"
          placeholder="Task title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="border p-2 flex-1"
        />
        <select
          value={newStatusId || ""}
          onChange={(e) =>
            setNewStatusId(e.target.value ? Number(e.target.value) : undefined)
          }
          className="border p-2"
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
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          Add
        </button>
      </form>

      {/* Filter */}
      <select
        value={statusFilter || ""}
        onChange={(e) =>
          setStatusFilter(e.target.value ? Number(e.target.value) : undefined)
        }
        className="border p-2 mb-4"
      >
        <option value="">All</option>
        {statuses.map((s) => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
      </select>

      {/* Loading indicator */}
      {loading && <p className="text-gray-500 italic">Loading...</p>}

      {/* Task list */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task: Task) => (
          <CardList key={task.id} task={task} handleDelete={handleDelete} />
        ))}
      </ul>

      {/* Pagination */}
      <Pagination
        page={page}
        totalPages={totalPages}
        onPrev={() => setPage(page - 1) }
        onNext={() => setPage(page + 1) }        
      />     
    </div>
  );
}
