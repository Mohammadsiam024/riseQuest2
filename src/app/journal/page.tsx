"use client";
import Sidebar from "../components/sidebar";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, BookOpen } from "lucide-react";

// ✅ Define Entry type outside component
interface Entry {
  text: string;
  date: string;
}

export default function JournalPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [newEntry, setNewEntry] = useState("");

  const addEntry = () => {
    if (newEntry.trim() === "") return;
    setEntries([
      { text: newEntry, date: new Date().toLocaleDateString() },
      ...entries,
    ]);
    setNewEntry("");
  };

  return (
    <div className="flex min-h-screen bg-zinc-950 text-gray-100">
      <Sidebar />
      {/* Main Content */}
      <main className="flex-1 p-6 sm:p-10 bg-gradient-to-b from-zinc-800 to-zinc-900">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-purple-500 mb-6 flex items-center gap-2"
        >
          <BookOpen className="text-purple-400" size={28} />
          Journal
        </motion.h2>

        {/* Add New Entry */}
        <div className="bg-zinc-900 p-4 rounded-xl shadow-md mb-6">
          <textarea
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            placeholder="Write your thoughts for today/ How your day went/ What changes you want to do tommorrow..."
            className="w-full p-3 bg-zinc-800 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows={4}
          />
          <button
            onClick={addEntry}
            className="mt-3 flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg shadow-md transition"
          >
            <Plus size={20} /> Add Entry
          </button>
        </div>

        {/* Entries List */}
        <div className="space-y-4">
          {entries.length === 0 ? (
            <p className="text-gray-400">
              No journal entries yet. Start writing!
            </p>
          ) : (
            entries.map((entry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-900 p-4 rounded-xl shadow-md"
              >
                <p className="text-sm text-gray-400">{entry.date}</p>
                <p className="mt-2">{entry.text}</p>
              </motion.div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
