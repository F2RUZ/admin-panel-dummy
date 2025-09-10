import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTasks, // todos
  FaUsers, // users
  FaRegNewspaper, // posts
  FaBoxOpen, // products
  FaShoppingCart, // carts
  FaUtensils, // resipes
  FaComments, // comments
  FaQuoteRight, // quotes
  FaCog, // settings
  FaSignOutAlt, // logout
  FaDatabase, // logo / dashboard
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="fixed left-6 top-[80px] h-[80vh] w-[100px] rounded-3xl bg-neutral-900/80 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/40 flex flex-col items-center justify-between p-5">
      {/* Top part: Logo */}
      <div className="flex flex-col items-center gap-6 text-xl text-neutral-300">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-3 rounded-xl transition flex items-center justify-center ${
              isActive
                ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white"
                : "hover:bg-white/10"
            }`
          }
        >
          <FaDatabase />
        </NavLink>
      </div>

      {/* Middle Menu */}
      <nav className="flex flex-col gap-6 text-xl text-neutral-300">
        <NavLink
          to="/todos"
          className={({ isActive }) =>
            `p-3 rounded-xl transition flex items-center justify-center ${
              isActive
                ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white"
                : "hover:bg-white/10"
            }`
          }
        >
          <FaTasks />
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            `p-3 rounded-xl transition flex items-center justify-center ${
              isActive
                ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white"
                : "hover:bg-white/10"
            }`
          }
        >
          <FaUsers />
        </NavLink>

        <NavLink
          to="/posts"
          className={({ isActive }) =>
            `p-3 rounded-xl transition flex items-center justify-center ${
              isActive
                ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white"
                : "hover:bg-white/10"
            }`
          }
        >
          <FaRegNewspaper />
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            `p-3 rounded-xl transition flex items-center justify-center ${
              isActive
                ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white"
                : "hover:bg-white/10"
            }`
          }
        >
          <FaBoxOpen />
        </NavLink>

        <NavLink
          to="/carts"
          className={({ isActive }) =>
            `p-3 rounded-xl transition flex items-center justify-center ${
              isActive
                ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white"
                : "hover:bg-white/10"
            }`
          }
        >
          <FaShoppingCart />
        </NavLink>

        <NavLink
          to="/resipes"
          className={({ isActive }) =>
            `p-3 rounded-xl transition flex items-center justify-center ${
              isActive
                ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white"
                : "hover:bg-white/10"
            }`
          }
        >
          <FaUtensils />
        </NavLink>

        <NavLink
          to="/comments"
          className={({ isActive }) =>
            `p-3 rounded-xl transition flex items-center justify-center ${
              isActive
                ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white"
                : "hover:bg-white/10"
            }`
          }
        >
          <FaComments />
        </NavLink>

        <NavLink
          to="/quotes"
          className={({ isActive }) =>
            `p-3 rounded-xl transition flex items-center justify-center ${
              isActive
                ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white"
                : "hover:bg-white/10"
            }`
          }
        >
          <FaQuoteRight />
        </NavLink>
      </nav>

      {/* Bottom part: Settings + Logout */}
      <div className="flex flex-col items-center gap-6 text-xl text-neutral-300">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `p-3 rounded-xl transition flex items-center justify-center ${
              isActive
                ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white"
                : "hover:bg-white/10"
            }`
          }
        >
          <FaCog />
        </NavLink>

        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/auth";
          }}
          className="p-3 rounded-xl transition flex items-center justify-center hover:bg-white/10 text-neutral-300"
        >
          <FaSignOutAlt />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
