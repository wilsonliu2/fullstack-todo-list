import React, { useState } from "react";
import TaskService from "../services/TaskService";
import { useNavigate } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";

const TaskForm = ({ onTaskAdded, open, closeForm }) => {
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    dueDate: "",
    isComplete: "false",
    category: "",
  });

  const navigate = useNavigate();

  // Function for closing the form
  const close = () => {
    closeForm();
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const value = e.target.value;
    setTask({ ...task, [e.target.name]: value });
  };

  // Function to save task
  const saveTask = (e) => {
    e.preventDefault();
    if (!task.title) {
      return;
    }
    console.log(task);
    TaskService.saveTask(task)
      .then((response) => {
        console.log(response);
        onTaskAdded();
        navigate("/");
        close();

        setTask({
          id: "",
          title: "",
          description: "",
          dueDate: "",
          isComplete: "false",
          category: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex w-[95%] flex-col gap-1 divide-y-2 rounded border-2 border-solid bg-white lg:w-1/4">
            <div className="flex items-center justify-between p-3 text-xl">
              <p>Add Task</p>
              <FaXmark
                onClick={close}
                className="hover: cursor-pointer text-gray-500 hover:text-black"
              />
            </div>

            <div className="rounded p-4">
              <div>
                <label className="block" htmlFor="title">
                  Title<span className="text-red-400">*</span>:
                </label>
                <input
                  className="mb-2 h-8 w-[95%] rounded border border-gray-300 p-2 focus:border-blue-300 focus:outline-none"
                  type="text"
                  name="title"
                  id="title"
                  value={task.title}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>

              <div>
                <label className="block" htmlFor="description">
                  Description:
                </label>
                <textarea
                  className="mb-2 h-24 w-[95%] rounded border border-gray-300 p-2 focus:border-blue-300 focus:outline-none"
                  type="text"
                  name="description"
                  id="description"
                  value={task.description}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="flex items-center gap-2">
                <label className="block" htmlFor="isComplete">
                  Completed:
                </label>
                <input
                  className="h-3 rounded border border-gray-300 focus:border-blue-300 focus:outline-none"
                  type="checkbox"
                  name="isComplete"
                  id="isComplete"
                  onChange={(e) =>
                    setTask({ ...task, isComplete: e.target.checked })
                  }
                />
              </div>

              <div>
                <label className="block" htmlFor="category">
                  Category name:
                </label>
                <input
                  className="mb-2 h-8 w-[95%] rounded border border-gray-300 p-2 focus:border-blue-300 focus:outline-none"
                  type="text"
                  name="category"
                  id="category"
                  value={task.category}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>

              <div>
                <label className="block" htmlFor="dueDate">
                  Due Date:
                </label>
                <input
                  className="mb-2 h-8 w-[95%] rounded border border-gray-300 p-2 focus:border-blue-300 focus:outline-none"
                  type="date"
                  name="dueDate"
                  id="dueDate"
                  value={task.dueDate}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="mt-2 flex justify-end gap-2">
                <button
                  onClick={close}
                  className="rounded border border-blue-400 px-4 py-2 text-blue-400 hover:border-blue-500 hover:bg-blue-100"
                >
                  Close
                </button>
                <button
                  onClick={saveTask}
                  className="rounded bg-blue-400 px-4 py-2 text-white hover:bg-blue-500"
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskForm;
