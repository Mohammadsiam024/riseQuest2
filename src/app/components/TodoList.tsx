"use client";

import React, { useState } from "react";
import { Plus, Trash2, CheckCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Todo {
  id: number;
  text: string;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Finish React project" },
    { id: 2, text: "Read 10 pages of book" },
    { id: 3, text: "Workout for 30 mins" },
  ]);

  const [completed, setCompleted] = useState<Todo[]>([]);
  const [trashed, setTrashed] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (!newTodo.trim()) return;
    const newItem: Todo = { id: Date.now(), text: newTodo };
    setTodos((prev) => [...prev, newItem]);
    setNewTodo("");
  };

  const moveToTrash = (id: number) => {
    const item = todos.find((t) => t.id === id);
    if (!item) return;
    setTodos((prev) => prev.filter((t) => t.id !== id));
    setTrashed((prev) => [...prev, item]);
  };

  const completeTodo = (id: number) => {
    const item = todos.find((t) => t.id === id);
    if (!item) return;
    setTodos((prev) => prev.filter((t) => t.id !== id));
    setCompleted((prev) => [...prev, item]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {/* To-Do List */}
      <div className="h-96 bg-zinc-900 rounded-2xl shadow-lg p-6 flex flex-col">
        <h2 className="text-xl font-bold text-purple-400 mb-4">📝 To-Do List</h2>

        <div className="flex-1 overflow-y-auto space-y-3">
          <AnimatePresence>
            {todos.map((todo) => (
              <motion.div
                key={todo.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg px-4 py-2"
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded-full accent-green-500 cursor-pointer"
                  onChange={() => completeTodo(todo.id)}
                />
                <span className="flex-1 text-gray-200">{todo.text}</span>
                <button
                  onClick={() => moveToTrash(todo.id)}
                  className="text-red-400 hover:text-red-600 transition"
                >
                  <Trash2 size={18} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Add new todo */}
        <div className="flex mt-4 gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="New activity..."
            className="flex-1 rounded-lg bg-zinc-800 px-3 py-2 text-gray-200 focus:outline-none"
          />
          <button
            onClick={addTodo}
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg transition flex items-center gap-1"
          >
            <Plus size={18} /> Add
          </button>
        </div>
      </div>

      {/* Completed List */}
      <div className="h-96 bg-zinc-900 rounded-2xl shadow-lg p-6 flex flex-col">
        <h2 className="text-xl font-bold text-green-400 mb-4">✅ Completed</h2>

        <div className="flex-1 overflow-y-auto overflow-x-hidden space-y-3">
          <AnimatePresence>
            {completed.map((todo) => (
              <motion.div
                key={todo.id}
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 bg-zinc-800 rounded-lg px-4 py-2"
              >
                <span className="flex-1 text-gray-400">
                  {todo.text}{" "}
                  <CheckCheck className="text-green-500 inline ml-2" />
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Trashed List */}
      <div className="h-96 bg-zinc-900 rounded-2xl shadow-lg p-6 flex flex-col">
        <h2 className="text-xl font-bold text-red-400 mb-4">🗑 Trashed</h2>

        <div className="flex-1 overflow-y-auto space-y-3">
          <AnimatePresence>
            {trashed.map((todo) => (
              <motion.div
                key={todo.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 bg-zinc-800 rounded-lg px-4 py-2"
              >
                <span className="flex-1 text-gray-400 italic line-through">
                  {todo.text}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
