'use client';

import { motion } from 'framer-motion';

interface AchievementProps {
  icon: string;
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  unlocked?: boolean;
}

const Achievement = ({ icon, title, description, unlocked = true }: AchievementProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative group"
    >
      {/* Achievement Medal */}
      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl
        ${unlocked ? 'bg-game-accent' : 'bg-gray-700'} 
        transition-all duration-300 relative z-10`}
    >
        {icon}
      </div>

      {/* Tooltip */}
      <div className="absolute left-0 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
        <div className="bg-game-primary border border-game-accent p-4 rounded-lg shadow-lg w-64">
          <h3 className={`text-lg font-bold mb-2 ${unlocked ? 'text-game-text' : 'text-gray-400'}`}>
            {title.en}
          </h3>
          <p className="text-sm text-gray-300">
            {description.en}
          </p>
          {!unlocked && (
            <div className="mt-2 text-xs text-gray-400">
              🔒 Locked
            </div>
          )}
        </div>
        {/* Tooltip arrow */}
        <div className="w-3 h-3 bg-game-primary border-r border-b border-game-accent transform rotate-45 absolute -bottom-1.5 left-7" />
      </div>
    </motion.div>
  );
};

export default Achievement; 