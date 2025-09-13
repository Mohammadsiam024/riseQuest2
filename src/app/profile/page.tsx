"use client";

import Sidebar from "../components/sidebar";
import { motion } from "framer-motion";
import { User, Flame, Award, Target } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-gray-100 gap-6">
      <Sidebar />
      <main className="flex-1 p-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-zinc-900 p-6 rounded-xl shadow-lg flex items-center gap-6 mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
            <User className="w-12 h-12 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-purple-400">John Doe</h1>
            <p className="text-gray-400">Level 5 • 1200 XP</p>
            <p className="text-sm text-gray-500 mt-1">
              &quot;Learning every day ✨&quot;
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-zinc-900 p-6 rounded-xl shadow-md flex items-center gap-4"
          >
            <Flame className="text-orange-400 w-8 h-8" />
            <div>
              <p className="text-gray-400 text-sm">Current Streak</p>
              <p className="text-lg font-bold">12 days 🔥</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-900 p-6 rounded-xl shadow-md flex items-center gap-4"
          >
            <Award className="text-yellow-400 w-8 h-8" />
            <div>
              <p className="text-gray-400 text-sm">Quests Completed</p>
              <p className="text-lg font-bold">45</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-zinc-900 p-6 rounded-xl shadow-md flex items-center gap-4"
          >
            <Target className="text-indigo-400 w-8 h-8" />
            <div>
              <p className="text-gray-400 text-sm">Community Rank</p>
              <p className="text-lg font-bold">#23</p>
            </div>
          </motion.div>
        </div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-zinc-900 p-6 rounded-xl shadow-lg mb-8"
        >
          <h2 className="text-xl font-bold text-purple-400 mb-3">About Me</h2>
          <p className="text-gray-300">
            Hi, I’m John! 🚀 I’m on a journey to improve myself every day.  
            I love coding, journaling, and taking on new challenges.
          </p>
        </motion.div>

        {/* Skills Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-zinc-900 p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-xl font-bold text-purple-400 mb-4">Skills</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-300 mb-1">Coding</p>
              <div className="w-full bg-zinc-800 rounded-full h-3">
                <div className="bg-purple-500 h-3 rounded-full w-[75%]"></div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-300 mb-1">Creativity</p>
              <div className="w-full bg-zinc-800 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full w-[60%]"></div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-300 mb-1">Consistency</p>
              <div className="w-full bg-zinc-800 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full w-[85%]"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
