import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Dashboard from "../components/ui/dashboard/Dashboard";

const Layout = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Navbar */}
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <main className="flex-1 ml-[120px] mt-[80px] p-6">
          <div className="min-h-[calc(100vh-100px)] rounded-3xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl shadow-xl shadow-black/40 p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
