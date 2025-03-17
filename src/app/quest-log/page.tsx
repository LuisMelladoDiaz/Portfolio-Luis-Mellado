'use client';

import { motion } from 'framer-motion';
import QuestLog from '@/components/QuestLog';

export default function QuestLogPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-game-secondary rounded-lg p-8"
      >
        <h1 className="text-4xl font-bold text-white mb-2">Quest Log</h1>
        <p className="text-gray-400 mb-8">My journey through education, work, and personal projects</p>
        
        <QuestLog />
      </motion.div>
    </main>
  );
} 