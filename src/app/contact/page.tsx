'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just console.log the data
    console.log(formState);
    // You can add email service integration later
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mellado-diaz-luis/',
      icon: '🔗'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/LuisMelladoDiaz',
      icon: '💻'
    },
    {
      name: 'Email',
      url: 'mailto:melladodiazluis@gmail.com',
      icon: '📧'
    },
    {
      name: 'Phone',
      url: 'tel:684266232',
      icon: '📱'
    }
  ];

  return (
    <main className="min-h-screen bg-game-primary text-white p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold text-game-accent mb-8"
        >
          Contact Quest
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-game-secondary rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-game-primary border border-game-accent focus:outline-none focus:ring-2 focus:ring-game-accent"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-game-primary border border-game-accent focus:outline-none focus:ring-2 focus:ring-game-accent"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-game-primary border border-game-accent focus:outline-none focus:ring-2 focus:ring-game-accent"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-game-accent text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-game-secondary rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-6">Quick Connect</h2>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-game-primary rounded-lg hover:bg-opacity-80 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span className="font-medium">{link.name}</span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-4 bg-game-primary rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-300">
                Francisco Lara 49 alto,<br />
                Chipiona, Cádiz. 11550<br />
                Spain
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 