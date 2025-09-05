export default function Sidebar() {
  return (
    <div className="w-64 bg-white h-screen p-6 shadow-md">
      <ul className="flex flex-col gap-2">
        <li className="px-4 py-2 rounded hover:bg-blue-100 cursor-pointer border-b border-gray-200 text-gray-700 font-medium">
          Dashboard
        </li>
        <li className="px-4 py-2 rounded hover:bg-blue-100 cursor-pointer border-b border-gray-200 text-gray-700 font-medium">
          Projects
        </li>
        <li className="px-4 py-2 rounded hover:bg-blue-100 cursor-pointer text-gray-700 font-medium">
          Profile
        </li>
      </ul>
    </div>
  );
}
