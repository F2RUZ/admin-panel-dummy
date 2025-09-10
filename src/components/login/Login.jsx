import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// API so‘rov funksiyasi
const postUser = async ({ username, password }) => {
  return await axios.post("https://dummyjson.com/auth/login", {
    username,
    password,
  });
};

export default function LoginPage() {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const navigate = useNavigate();

  // mutation
  const { mutate, isPending } = useMutation({
    mutationFn: postUser,
    mutationKey: ["user"],

    onSuccess: (res) => {
      toast.success("Kirish muvaffaqiyatli ✅");
      if (res?.status === 200) {
        localStorage.setItem("accessToken", res?.data?.accessToken);
        localStorage.setItem("refreshToken", res?.data?.refreshToken);

        navigate("/");
      }
    },

    onError: (error) => {
      toast.error("Login xato ❌");
      console.error(error);
    },
  });

  // onsubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ username, password });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-neutral-950 text-neutral-100">
      {/* ... background qismini o‘zgartirmadim ... */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-12">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center">
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 font-bold text-white shadow-lg shadow-indigo-500/20">
              DA
            </span>
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Dummy
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">
                Admin
              </span>
            </h1>
          </div>
          <p className="text-sm text-neutral-400">Admin panelga kirish</p>
        </div>

        {/* Card */}
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl shadow-black/40">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Username */}
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm text-neutral-300">
                Username yoki Email
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. kminchelle"
                className="w-full rounded-2xl border border-white/10 bg-neutral-900/60 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
                autoComplete="username"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-neutral-300">
                Parol
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-white/10 bg-neutral-900/60 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute inset-y-0 right-0 my-1 mr-1 rounded-xl border border-white/10 bg-white/5 px-3 text-xs text-neutral-300"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center justify-between gap-2">
              <label className="inline-flex items-center gap-2 text-xs text-neutral-300">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 rounded border-white/20 bg-neutral-900/60 accent-indigo-500"
                />
                Eslab qolish
              </label>
              <a
                href="#"
                className="text-xs text-indigo-300 hover:text-indigo-200"
              >
                Parolni unutdingizmi?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 px-4 py-3 text-sm font-medium text-white shadow-lg hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isPending ? "Yuklanmoqda..." : "Kirish"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
