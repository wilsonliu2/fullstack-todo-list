import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import TaskService from "../services/TaskService";
import TaskList from "./TaskList";

const Main = ({ showSidebar }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await TaskService.getTasks();
        setTasks(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <div className="flex">
        <div className="hidden lg:block">
          <Sidebar tasks={tasks} />
        </div>
        {showSidebar && <Sidebar tasks={tasks} />}
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <Routes>
            <Route
              path="/"
              element={<TaskList tasks={tasks} filter={"All"} />}
            />
            <Route
              path="/today"
              element={<TaskList tasks={tasks} filter={"Today"} />}
            />
            <Route
              path="/week"
              element={<TaskList tasks={tasks} filter={"Week"} />}
            />
            <Route
              path="*"
              element={<TaskList tasks={tasks} filter={"Category"} />}
            />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
};

export default Main;
