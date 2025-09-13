"use client";
import Sidebar from "../components/sidebar";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Circle } from "lucide-react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function QuestPage() {
  const [daily, setDaily] = useState<Task[]>([
    { id: 1, text: "Log in today", completed: false },
    { id: 2, text: "Write a journal entry", completed: false },
    { id: 3, text: "Complete 1 coding challenge", completed: false },

  ]);

  const [weekly, setWeekly] = useState<Task[]>([
    { id: 1, text: "Finish 5 daily quests", completed: false },
    { id: 2, text: "Contribute to community forum", completed: false },
    { id: 3, text: "Try a new coding skill", completed: false },
  ]);

  const [community, setCommunity] = useState<Task[]>([
    { id: 1, text: "Monk mode for 7 days", completed: false },
    { id: 2, text: "Talk to 3 new people for 7 days", completed: false },
  ]);

  const toggleTask = (
    type: "daily" | "weekly" | "community",
    id: number
  ) => {
    const update = (tasks: Task[]) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );

    if (type === "daily") setDaily(update(daily));
    if (type === "weekly") setWeekly(update(weekly));
    if (type === "community") setCommunity(update(community));
  };

  const renderTasks = (tasks: Task[], type: "daily" | "weekly" | "community") =>
    tasks.map((task) => (
      <motion.div
        key={task.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className={`flex items-center justify-between p-3 rounded-lg shadow-md ${
          task.completed ? "bg-green-900/40" : "bg-zinc-800"
        }`}
      >
        <span
          className={`${
            task.completed ? " text-gray-400" : "text-gray-100"
          }`}
        >
          {task.text}
        </span>
        <button
          onClick={() => toggleTask(type, task.id)}
          className="p-2 rounded-full hover:bg-zinc-700 transition"
        >
          {task.completed ? (
            <CheckCircle className="text-green-400" />
          ) : (
            <Circle className="text-gray-400" />
          )}
        </button>
      </motion.div>
    ));

  return (

    <div className="flex min-h-screen bg-zinc-950 text-gray-100 gap-6" >
        <Sidebar />
      <main className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 pt-15 h-15">
        {/* Daily Quests */}
        <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-purple-400 mb-4">Daily Quests</h2>
          <div className="space-y-3">{renderTasks(daily, "daily")}</div>
        </div>

        {/* Weekly Quests */}
        <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-yellow-400 mb-4">Weekly Quests</h2>
          <div className="space-y-3">{renderTasks(weekly, "weekly")}</div>
        </div>

        {/* Community Challenge */}
        <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-indigo-400 mb-4">
            Community Challenge
          </h2>
          <div className="space-y-3">{renderTasks(community, "community")}</div>
        </div>
      </main>
    </div>
  );
}
