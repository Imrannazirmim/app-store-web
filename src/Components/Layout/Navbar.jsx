import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoApps, IoHome } from "react-icons/io5";
import { MdInstallDesktop } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className="w-full shadow-md">
        <nav className="flex justify-between items-center py-3 px-20">
          <Link to={"/"}>
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" className="w-12" />
              <span className="text-xl font-semibold text-blue-500">
                GetAppStore
              </span>
            </div>
          </Link>
          <ul className="hidden lg:flex gap-10 items-center ">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/apps"}>Apps</NavLink>
            <NavLink to={"/installation"}>Installation</NavLink>
          </ul>
          <div>
            <a
              href="https://github.com/Imrannazirmim/app-store-web"
              target="_blank"
            >
              <button className="btn-primary hidden lg:flex items-center gap-2 ">
                <FaGithub />
                Contribute
              </button>
            </a>
          </div>
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="flex lg:hidden"
          >
            {openMenu ? (
              <RxCross1 size={25} className="font-bold" />
            ) : (
              <CiMenuFries size={25} className="font-extrabold" />
            )}
          </button>
        </nav>
      </header>
      {openMenu && (
        <div className="flex flex-col absolute w-[15rem] h-58 ml-1 rounded-b-xl bg-gray-500 text-white">
          <ul className="flex flex-col lg:hidden gap-4 ml-2 mt-4 ">
            <NavLink
              to={"/"}
              className="flex items-center gap-1 text-xl hover:bg-gray-600 p-1 rounded-md"
            >
              <IoHome />
              Home
            </NavLink>
            <NavLink
              to={"/apps"}
              className="flex items-center gap-1 text-xl hover:bg-gray-600 p-1 rounded-md"
            >
              <IoApps />
              Apps
            </NavLink>
            <NavLink
              to={"/installation"}
              className="flex items-center gap-1 text-xl hover:bg-gray-600 p-1 rounded-md"
            >
              <MdInstallDesktop />
              Installation
            </NavLink>
          </ul>
          <div className="ml-2 mt-5">
            <a
              href="https://github.com/Imrannazirmim/app-store-web"
              target="_blank"
            >
              <button className="btn-primary flex lg:hidden items-center gap-2 ">
                <FaGithub />
                Contribute
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;
