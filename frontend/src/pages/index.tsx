import Layout from "../components/Layout";
export default function Home() {
  return (
    <Layout>
      <h2 className="text-xl font-semibold mb-4">Welcome to Task Manager 🚀</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded-lg">Task 1</div>
        <div className="p-4 bg-white shadow rounded-lg">Task 2</div>
        <div className="p-4 bg-white shadow rounded-lg">Task 3</div>
      </div>
    </Layout>
  );
}
