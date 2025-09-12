"use client";
import React, { useState } from "react";
import { Star, Code, Brain, Dumbbell } from "lucide-react";
import Modal from "./Modal";

// Define allowed skill names
type SkillName = "Discipline" | "Strength" | "Mindfulness" | "Spirituality";

// Map only valid skill names to icons
const skillIcons: Record<SkillName, React.ElementType> = {
  Discipline: Code,
  Strength: Dumbbell,
  Mindfulness: Brain,
  Spirituality: Star,
};

// Dummy skills data
const dummySkills: { id: number; name: SkillName; user_level: number; user_xp: number; color: string }[] = [
  { id: 1, name: "Discipline", user_level: 3, user_xp: 30, color: "#60a5fa" },
  { id: 2, name: "Strength", user_level: 5, user_xp: 45, color: "#DC143C" },
  { id: 3, name: "Mindfulness", user_level: 2, user_xp: 20, color: "#34d399" },
  { id: 4, name: "Spirituality", user_level: 4, user_xp: 40, color: "#FFD700" },
];

export default function Skills() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6 pt-25">
      {/* Status Card trigger */}
      <div
        onClick={() => setIsModalOpen(true)}
        className="bg-zinc-900 hover:bg-gradient-to-r from-purple-900 to-purple-800 rounded-xl p-7 shadow-sm border border-purple-500 cursor-pointer transition-transform hover:scale-105"
      >
        <h3 className="text-purple-500 flex items-center gap-3 font-bold mb-4">Status Card</h3>
        <div className="space-y-4">
          {dummySkills.map((skill) => {
            const Icon = skillIcons[skill.name] || Code;
            return (
              <div key={skill.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon size={18} color={skill.color} />
                    <span className="text-purple-100">{skill.name}</span>
                  </div>
                  <span className="hover:text-purple-400 transition-colors">
                    Lv.{skill.user_level}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: skill.color,
                      width: `${((skill.user_xp % 50) / 50) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal with expanded status card */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-purple-400 text-xl font-bold mb-6 text-center">Status Card</h2>
        <div className="space-y-5">
          {dummySkills.map((skill) => {
            const Icon = skillIcons[skill.name] || Code;
            return (
              <div key={skill.id}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Icon size={22} color={skill.color} />
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-purple-400">Lv.{skill.user_level}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 mt-2">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      backgroundColor: skill.color,
                      width: `${((skill.user_xp % 50) / 50) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </Modal>
    </div>
  );
}
