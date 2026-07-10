import React, { useState, useEffect } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardStats from "../components/DashboardStats";
import TaskForm from "../components/TaskForm";
import TaskFilters from "../components/TaskFilters";
import TaskList from "../components/TaskList";
import NavigationBar from "../components/Navbar";

function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
    dueDate: "",
    status: "pending",
  });
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("dueDate");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log("UserID", user.id);
      const { data } = await getTasks(user.id);
      setTasks(data);
    } catch (err) {
      toast.error("Failed to fetch tasks");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      console.log(user);
      if (editing) {
        await updateTask(editing._id, formData);
        toast.success("Task updated");
        setEditing(null);
      } else {
        await createTask({ ...formData, user: user.id });
        toast.success("Task created");
      }
      setFormData({
        title: "",
        description: "",
        priority: "medium",
        dueDate: "",
        status: "pending",
      });
      fetchTasks();
    } catch (err) {
      toast.error(
        err.response?.data?.errors?.[0]?.msg || "Something went wrong",
      );
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this task?")) {
      await deleteTask(id);
      toast.info("Task deleted");
      fetchTasks();
    }
  };

  const handleEdit = (task) => {
    setEditing(task);
    setFormData({
      title: task.title,
      description: task.description || "",
      priority: task.priority,
      dueDate: task.dueDate ? task.dueDate.split("T")[0] : "",
      status: task.status,
    });
  };

  const handleClearFilters = () => {
    setSearch("");
    setFilterStatus("all");
    setSortBy("dueDate");
  };

  const total = tasks.length;
  const pending = tasks.filter((t) => t.status === "pending").length;
  const completed = tasks.filter((t) => t.status === "completed").length;
  const highPriority = tasks.filter((t) => t.priority === "high").length;

  let filtered = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || task.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  filtered.sort((a, b) => {
    if (sortBy === "dueDate") {
      return new Date(a.dueDate) - new Date(b.dueDate);
    } else if (sortBy === "priority") {
      const order = { high: 1, medium: 2, low: 3 };
      return order[a.priority] - order[b.priority];
    }
    return 0;
  });

  return (
    <>
      {/* <NavigationBar/> */}
      <div className="sm:p-6 bg-gray-50 min-h-screen">
        <ToastContainer position="top-right" autoClose={3000} />

        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Task Tracker</h1>
          <div className="mt-2 sm:mt-0 bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
            Welcome back, Developer!
          </div>
        </header>

        <DashboardStats
          total={total}
          pending={pending}
          completed={completed}
          highPriority={highPriority}
        />

        <TaskForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          editing={editing}
        />

        <TaskFilters
          search={search}
          setSearch={setSearch}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          sortBy={sortBy}
          setSortBy={setSortBy}
          onClear={handleClearFilters}
        />

        <TaskList
          tasks={filtered}
          onEdit={handleEdit}
          onDelete={handleDelete}
          totalTasks={tasks.length}
          displayedCount={filtered.length}
        />
      </div>
    </>
  );
}

export default HomePage;
