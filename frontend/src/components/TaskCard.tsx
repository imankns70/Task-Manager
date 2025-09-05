import { Task } from "@/models/task";

export default function TaskCard({ task, onDelete }: { task: Task; onDelete?: (id: number) => void }) {
  return (
    <div className="p-4 bg-white shadow rounded-lg flex justify-between items-center">
      <div>
        <h3 className="font-bold">{task.title}</h3>
        <p>{task.description}</p>
      </div>
      {onDelete && (
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      )}
    </div>
  );
}
