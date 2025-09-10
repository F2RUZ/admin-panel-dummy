import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const getSingleTodo = async (id) => {
  return await axios.get(`https://dummyjson.com/todos/${id}`);
};

const Table = ({ todos = [] }) => {
  const [page, setPage] = useState(1);

//   const { isLoading, isError, todo } = useQuery({
//     queryKey: ["todo"],
//     queryFn: getSingleTodo,
//   });

  // pagination
  const rowsPerPage = 10;
  const totalPages = Math.ceil(todos.length / rowsPerPage);

  const currentData = todos.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto rounded-3xl bg-neutral-900/60 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Todos jadvali</h2>
          <button className="rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-md hover:brightness-110">
            ➕ Yangi todo
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-white/10">
            <thead className="bg-neutral-800/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-neutral-300">
                  #
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-neutral-300">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-neutral-300">
                  UserId
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-neutral-300">
                  Completed
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-neutral-300">
                  Status
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase text-neutral-300">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="bg-transparent divide-y divide-white/10">
              {currentData.map((item, index) => (
                <tr key={item.id} className="hover:bg-white/5 transition">
                  <td className="px-6 py-4 text-sm text-neutral-300">
                    {(page - 1) * rowsPerPage + index + 1}
                  </td>
                  <td className="px-6 py-4 text-sm text-white">{item?.todo}</td>
                  <td className="px-6 py-4 text-sm text-neutral-300">
                    {item?.userId}
                  </td>
                  <td className="px-6 py-4">
                    {item?.completed ? (
                      <span className="inline-flex items-center rounded-full bg-green-700/30 px-3 py-1 text-xs font-medium text-green-200">
                        Completed
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-red-700/30 px-3 py-1 text-xs font-medium text-red-200">
                        Pending
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-300">
                    {item?.completed ? "Active" : "Inactive"}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <div className="inline-flex items-center gap-2">
                      <button
                        onClick={() => {
                          getSingleTodo(item.id);
                        }}
                        className="px-3 py-1 rounded-lg bg-blue-600/80 text-sm text-white hover:bg-blue-700"
                      >
                        View
                      </button>
                      <button className="px-3 py-1 rounded-lg bg-red-600/80 text-sm text-white hover:bg-red-700">
                        Delete
                      </button>
                      <button className="px-3 py-1 rounded-lg bg-yellow-500/80 text-sm text-white hover:bg-yellow-600">
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer with pagination */}
        <div className="px-6 py-4 border-t border-white/10 text-sm text-neutral-400 flex items-center justify-between">
          <span>
            Showing <span className="text-white">{currentData.length}</span> of{" "}
            <span className="text-white">{todos.length}</span> todos
          </span>

          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-3 py-1 rounded-lg bg-white/5 text-sm text-neutral-200 hover:bg-white/10 disabled:opacity-30"
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`px-3 py-1 rounded-lg text-sm ${
                    page === i + 1
                      ? "bg-indigo-600 text-white"
                      : "bg-white/5 text-neutral-200 hover:bg-white/10"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="px-3 py-1 rounded-lg bg-white/5 text-sm text-neutral-200 hover:bg-white/10 disabled:opacity-30"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
