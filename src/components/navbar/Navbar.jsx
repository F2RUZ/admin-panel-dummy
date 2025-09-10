import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-[10px] bg-neutral-950/70 border-b border-white/10 shadow-lg shadow-black/30">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 font-bold text-white shadow-lg shadow-indigo-500/20">
            DA
          </span>
          <h1 className="text-lg font-semibold text-white">
            Dummy
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">
              Admin
            </span>
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
