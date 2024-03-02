import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarDays,
  FaCalendarDay,
  FaCalendarWeek,
  FaTag,
} from "react-icons/fa6";

const Sidebar = ({ tasks }) => {
  const uniqueCategories = [
    ...new Set(tasks.map((task) => task.category.trim())),
  ].filter((category) => category !== "");

  return (
    <div className="absolute flex h-full w-72 flex-col items-center bg-gray-50 p-5">
      <div className="flex w-[90%] flex-col">
        <Link to="/">
          <button className="flex h-10 w-full items-center justify-start gap-2 rounded p-2  text-left hover:bg-gray-200">
            <FaCalendarDays className="text-blue-400" />
            <p>All</p>
          </button>
        </Link>
        <Link to="/today">
          <button className="flex h-10 w-full items-center justify-start gap-2 rounded p-2 text-left hover:bg-gray-200">
            <FaCalendarDay className="text-blue-400" />
            <p>Today</p>
          </button>
        </Link>

        <Link to="/week">
          <button className="flex h-10 w-full items-center justify-start gap-2 rounded p-2 text-left hover:bg-gray-200">
            <FaCalendarWeek className="text-blue-400" />
            <p>Week</p>
          </button>
        </Link>

        <div className="mt-5 flex h-10 w-full items-center justify-start gap-2 p-2 text-left text-lg">
          Task Category
        </div>
        <div>
          {uniqueCategories.map((category) => (
            <Link
              to={`/${category}`}
              key={category}
              className="flex h-10 w-full items-center justify-start gap-2 rounded p-2  text-left hover:bg-gray-200"
              onClick={() => handleCategoryFilter(category)}
            >
              <FaTag className="text-blue-400" />
              <p>{category}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
