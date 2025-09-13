"use client";

import Sidebar from "../components/sidebar";
import { motion } from "framer-motion";
import { Trophy, Medal } from "lucide-react";

interface Player {
  id: number;
  name: string;
  xp: number;
}

export default function LeaderboardPage() {
  const players: Player[] = [
    { id: 1, name: "Alice", xp: 3200 },
    { id: 2, name: "Bob", xp: 2800 },
    { id: 3, name: "Charlie", xp: 2500 },
    { id: 4, name: "David", xp: 2000 },
    { id: 5, name: "Eve", xp: 1800 },
  ];

  return (
    <div className="flex min-h-screen bg-zinc-950 text-gray-100 gap-6">
      <Sidebar />
      <main className="flex-1 p-8">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-bold text-purple-500 mb-6 flex items-center gap-2"
        >
          <Trophy className="text-purple-500" /> Leaderboard
        </motion.h1>

        <div className="bg-zinc-900 rounded-xl shadow-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-zinc-800 text-gray-400 text-sm">
              <tr>
                <th className="px-6 py-3">Rank</th>
                <th className="px-6 py-3">Player</th>
                <th className="px-6 py-3">XP</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <motion.tr
                  key={player.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-zinc-800 hover:bg-zinc-800/50 transition"
                >
                  <td className="px-6 py-4 font-bold flex items-center gap-2">
                    {index === 0 && <Medal className="text-yellow-400" />}
                    {index === 1 && <Medal className="text-gray-400" />}
                    {index === 2 && <Medal className="text-amber-700" />}
                    {index + 1}
                  </td>
                  <td className="px-6 py-4">{player.name}</td>
                  <td className="px-6 py-4 text-purple-400">{player.xp} XP</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
