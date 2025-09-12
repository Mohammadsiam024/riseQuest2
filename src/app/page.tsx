"use client";

import { useState, useEffect } from "react";
import { Flame, Star, Award } from "lucide-react";
import Sidebar from "./components/sidebar";
import Checkin from "./components/checkin";
import TodoList from "./components/TodoList";
import { motion, useAnimationControls } from "framer-motion";

export default function Home() {
  const [count, setCount] = useState(0); // streak count
  const streakControls = useAnimationControls();

  // 🔹 Trigger pulse animation whenever streak changes
  useEffect(() => {
    if (count > 0) {
      streakControls.start({
        scale: [1, 1.4, 1],
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    }
  }, [count, streakControls]);

  return (
    <div className="flex min-h-screen bg-zinc-950 text-gray-100">
      <Sidebar />

      <main className="flex-1 p-6 sm:p-10 bg-gradient-to-b from-zinc-800 to-zinc-900">
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="title text-3xl font-bold text-purple-500 mb-6"
        >
          ʀɪꜱᴇQᴜᴇꜱᴛ
        </motion.h2>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Current Streak */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="card bg-zinc-900 hover:bg-rose-700 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">Current Streak</h3>
            <motion.h2
              animate={streakControls} // 👈 this pulses when streak updates
              className="text-3xl font-bold flex items-center gap-3"
            >
              <Flame size={32} className="text-orange-400" />
              {count}
            </motion.h2>
          </motion.div>

          {/* Best Streak */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="card bg-zinc-900 hover:bg-purple-700 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">Best Streak</h3>
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Star size={32} className="text-yellow-400" /> 7
            </h2>
          </motion.div>

          {/* XP & Levels */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="card bg-zinc-900 hover:bg-purple-700 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <Award size={32} className="text-purple-400 mb-2" />
            <h3 className="text-xl font-semibold">XP & Levels</h3>
            <p className="text-gray-300">Level up with achievements.</p>
          </motion.div>
        </div>

        {/* Check-In Feature */}
        <div className="mb-10">
          <Checkin count={count} setCount={setCount} />
        </div>

        {/* Todo List Feature */}
        <div>
          <TodoList />
        </div>
      </main>
    </div>
  );
}
