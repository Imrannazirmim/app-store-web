import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="w-full shadow">
      <nav className="flex justify-between items-center py-3 px-20">
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-12" />
            <span className="text-xl font-semibold text-blue-500">
              GetAppStore
            </span>
          </div>
        </Link>
        <ul className="flex gap-10 items-center">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/apps"}>Apps</NavLink>
          <NavLink to={"/installation"}>Installation</NavLink>
        </ul>
        <div>
          <button className="btn-primary flex items-center gap-2 bg-blue-400">
            <FaGithub />
            Contribute
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
