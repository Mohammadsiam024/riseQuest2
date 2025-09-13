"use client";

import Sidebar from "../components/sidebar";
import { motion } from "framer-motion";
import { Bell, Palette, Lock } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="flex min-h-screen bg-zinc-950 text-gray-100 gap-6">
      <Sidebar />
      <main className="flex-1 p-8">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-bold text-purple-500 mb-6"
        >
          Settings
        </motion.h1>

        <div className="space-y-6">
          {/* Notifications */}
          <div className="bg-zinc-900 p-6 rounded-xl shadow-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="text-yellow-400" />
              <span>Enable Notifications</span>
            </div>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`px-4 py-1 rounded-full ${
                notifications
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gray-600 hover:bg-gray-700"
              } transition`}
            >
              {notifications ? "On" : "Off"}
            </button>
          </div>

          {/* Dark Mode */}
          <div className="bg-zinc-900 p-6 rounded-xl shadow-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Palette className="text-blue-400" />
              <span>Dark Mode</span>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-4 py-1 rounded-full ${
                darkMode
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "bg-gray-600 hover:bg-gray-700"
              } transition`}
            >
              {darkMode ? "Enabled" : "Disabled"}
            </button>
          </div>

          {/* Change Password */}
          <div className="bg-zinc-900 p-6 rounded-xl shadow-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Lock className="text-red-400" />
              <span>Change Password</span>
            </div>
            <button className="px-4 py-1 rounded-lg bg-red-600 hover:bg-red-700 transition">
              Update
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
