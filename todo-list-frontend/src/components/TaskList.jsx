import React, { useEffect, useState, useSyncExternalStore } from "react";
import TaskService from "../services/TaskService";
import TaskForm from "./TaskForm";
import FormUpdate from "./FormUpdate";
import { FaPenToSquare, FaTrash } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const TaskList = ({ tasks, filter }) => {
  // State variables
  const [taskList, setTaskList] = useState(tasks); // State variable to store the tasks data
  const [open, setOpen] = useState(false); // State variable for controlling the visibility of task form
  const [expandedTaskId, setExpandedTaskId] = useState(null); // State variable for tracking expanded task
  const [openUpdate, setOpenUpdate] = useState(false); // State variable for controlling the visibility of update form
  const location = useLocation();
  const [filterState, setFilterState] = useState(filter); // State variable for setting the current filter

  // Effect to update task list based on filter
  useEffect(() => {
    setTaskList(filteredTasks());
  }, [tasks, filter]);

  useEffect(() => {
    setFilterState(filter);
  }, [filter]);

  // Function to filter tasks based on filter prop
  const filteredTasks = () => {
    switch (filter) {
      case "All":
        return tasks;
      case "Today":
        return tasks.filter((task) => {
          const dueDate = new Date(task.dueDate);
          const now = new Date();
          const next24Hours = new Date(now.getTime() + 24 * 60 * 60 * 1000);
          return dueDate <= next24Hours;
        });
      case "Week":
        return tasks.filter((task) => {
          const dueDate = new Date(task.dueDate);
          const now = new Date();
          const next7Days = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
          const next24Hours = new Date(now.getTime() + 24 * 60 * 60 * 1000);
          return dueDate > next24Hours && dueDate <= next7Days;
        });
      case "Category":
        const filter = location.pathname.split("/").pop();
        setFilterState(filter);
        return tasks.filter((task) => {
          return task.category.toLowerCase() == filter.toLowerCase();
        });
      default:
        return tasks;
    }
  };

  // Function to refresh task list
  const refreshTaskList = async () => {
    try {
      const response = await TaskService.getTasks();
      setTaskList(response.data);
    } catch (error) {
      console.error("Error refreshing task list:", error);
    }
  };

  // Function to delete task
  const deleteTask = (e, id) => {
    e.preventDefault();
    TaskService.deleteTask(id).then((res) => {
      // After deleting the task, update the tasks data
      const updatedTasks = taskList.filter((task) => task.id !== id);
      setTaskList(updatedTasks);
    });
  };

  // Function to toggle task form visibility
  const togglePopup = () => {
    setOpen(!open);
  };

  // Function to toggle update form visibility
  const toggleUpdatePopup = (e) => {
    setOpenUpdate(!openUpdate);
  };

  const closeForm = () => {
    setOpen(false);
  };

  const closeUpdateForm = () => {
    setOpenUpdate(false);
    setExpandedTaskId(null);
  };

  // Function to toggle task details visibility
  const toggleTaskDetails = (id) => {
    if (id === expandedTaskId) {
      setExpandedTaskId(null);
      setOpenUpdate(false);
    } else {
      setExpandedTaskId(id);
    }
  };

  const handleCheckbox = (task) => {
    if (task.isComplete == "true") {
      return true;
    }
    return false;
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-5">
      <div className="text-center text-2xl font-bold">{filterState}</div>

      <div className="flex w-[100%] flex-col lg:w-[50%]">
        <div>
          {taskList.map((task) => (
            <div
              key={task.id}
              className={`m-2 flex flex-col gap-2 rounded ${handleCheckbox(task) ? "bg-gray-100" : "bg-blue-50"}`}
            >
              <div
                onClick={() => toggleTaskDetails(task.id)}
                className={`flex w-full cursor-pointer flex-row justify-between rounded p-1 ${handleCheckbox(task) ? "hover:bg-gray-200" : "hover:bg-blue-100"}`}
              >
                <div
                  className={`text-center ${handleCheckbox(task) ? "line-through" : ""}`}
                >
                  {task.title}
                </div>
                <div className="mr-2 flex gap-2">
                  <button onClick={toggleUpdatePopup}>
                    <FaPenToSquare className="hover:text-blue-400"></FaPenToSquare>
                  </button>
                  <button onClick={(e) => deleteTask(e, task.id)}>
                    <FaTrash className="hover:text-blue-400"></FaTrash>
                  </button>
                </div>
              </div>

              {expandedTaskId === task.id && (
                <div
                  className={`rounded p-1 ${handleCheckbox(task) ? "bg-gray-100" : "bg-blue-50"}`}
                >
                  <p>Description: {task.description}</p>
                  <p>Due Date: {task.dueDate}</p>
                  <p>Completed: {task.isComplete}</p>
                  <p>Category: {task.category}</p>
                </div>
              )}

              {expandedTaskId === task.id && openUpdate && (
                <FormUpdate
                  id={task.id}
                  onTaskAdded={refreshTaskList}
                  openUpdate={openUpdate}
                  closeForm={closeUpdateForm}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={togglePopup}
        className="rounded bg-blue-400 px-4 py-2 text-white hover:bg-blue-500"
      >
        Add task
      </button>

      <TaskForm
        onTaskAdded={refreshTaskList}
        open={open}
        closeForm={closeForm}
      />
    </div>
  );
};

export default TaskList;
