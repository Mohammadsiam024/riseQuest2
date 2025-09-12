// sidebar.jsx
import React from 'react';
import Skills from './skills';
import Link from "next/link";

import { House,Trophy, Flame, Award, ChartColumn, BookOpen, Settings } from "lucide-react";
function sidebar(){
    return(      
      <aside className="w-64 bg-gradient-to-b from-zinc-900 to-zinc-900 flex flex-col p-6">
            <div className="flex items-center space-x-4 ">
              <div className="text-right">
                <div className="text-sm text-gray-500">
                  Level 3
                </div>
                <div className="text-lg font-bold text-purple-500">
                  250 XP
                </div>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
            </div>
        <nav className="flex flex-col gap-4 pt-20">
        <Link
            href="/"
            className="flex items-center gap-3 hover:text-purple-400 transition-colors"
          >
            <House size={20} className="text-purple-400" /> Home
          </Link>
          <a
            href="#"
            className="flex items-center gap-3 hover:text-rose-700 transition-colors"
          >
            <Flame size={20} className="text-orange-400" /> Quest Line
          </a>
          <Link
            href="./journal"
            className="flex items-center gap-3 hover:text-purple-400 transition-colors"
          >
            <Award size={20} className="text-yellow-400" /> Journal
          </Link>
          <a
            href="#"
            className="flex items-center gap-3 hover:text-purple-400 transition-colors"
          >
            <ChartColumn size={20} className="text-purple-400" /> LeaderBoard
          </a>
          <a
            href="#"
            className="flex items-center gap-3 hover:text-purple-400 transition-colors"
          >
            <BookOpen size={20} className="text-indigo-400" /> Profile
          </a>
          <a
            href="#"
            className="flex items-center gap-3 hover:text-purple-400 transition-colors"
          >
            <Settings size={20} className="text-gray-400" /> Settings
          </a>
        </nav>
        <div>
        <Skills/>
        </div>

      </aside>


    )
}
export default sidebar;