import { Task } from "@/models/task";

interface CardListProps {
  task: Task;
  handleDelete: (id: number) => void;
}
export default function CardList({ task, handleDelete }: CardListProps) {
  const statusName = task.status?.name?.toLowerCase() || "";

  let bgColor = "bg-gray-100";
  let textColor = "text-gray-800";

  if (statusName === "todo") {
    bgColor = "bg-yellow-100";
    textColor = "text-yellow-900";
  } else if (statusName === "in-progress" || statusName === "inprogress") {
    bgColor = "bg-blue-100";
    textColor = "text-blue-900";
  } else if (statusName === "done") {
    bgColor = "bg-green-100";
    textColor = "text-green-900";
  }

  return (
    <li
      key={task.id}
      className={`${bgColor} ${textColor} p-4 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between`}
    >
      <div>
        <h3 className="font-bold text-lg mb-2">{task.title}</h3>
        {task.description && <p className="text-sm mb-3">{task.description}</p>}
        <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-white bg-opacity-40">
          {task.status?.name.toUpperCase()}
        </span>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          onClick={() => handleDelete(task.id!)}
          className="text-red-600 hover:underline font-medium"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
