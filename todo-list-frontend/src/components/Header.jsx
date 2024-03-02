import React from "react";
import "../App.css";
import { FaBars } from "react-icons/fa6";
import { FaCheckDouble } from "react-icons/fa6";

const Header = ({ sidebarVisible }) => {
  const toggleSidebar = () => {
    sidebarVisible();
  };

  return (
    <div className="flex h-14 items-center  gap-2 bg-blue-400 text-2xl text-white lg:pl-5">
      <FaBars
        onClick={toggleSidebar}
        className="ml-10 mr-5 h-7 w-7 rounded p-1 hover:bg-blue-300 lg:hidden"
      />
      <FaCheckDouble />
      <p>Todo List</p>
    </div>
  );
};

export default Header;
