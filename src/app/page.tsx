'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Achievement from '@/components/Achievement';

const achievements = [
  {
    icon: '⚡',
    title: {
      en: 'Physics Master',
      es: 'Maestro de la Física'
    },
    description: {
      en: 'Achieved honors in Physical Foundations of Computing, mastering hardware principles',
      es: 'Logró matrícula de honor en Fundamentos Físicos de la Informática, dominando principios del hardware'
    }
  },
  {
    icon: '🧮',
    title: {
      en: 'Logic Master',
      es: 'Maestro de la Lógica'
    },
    description: {
      en: 'Achieved honors in Computer Logic with outstanding problem-solving skills',
      es: 'Logró matrícula de honor en Lógica Informática demostrando excelentes habilidades de resolución de problemas'
    }
  },
  {
    icon: '🌐',
    title: {
      en: 'Networks Expert',
      es: 'Experto en Redes'
    },
    description: {
      en: 'Earned honors in Computer Networks, mastering network protocols and architecture',
      es: 'Obtuvo matrícula de honor en Redes de Computadores, dominando protocolos y arquitectura de redes'
    }
  },
  {
    icon: '💾',
    title: {
      en: 'Systems Architect',
      es: 'Arquitecto de Sistemas'
    },
    description: {
      en: 'Achieved honors in Information Systems, excelling in system design and management',
      es: 'Logró matrícula de honor en Sistemas de Información, destacando en diseño y gestión de sistemas'
    }
  },
  {
    icon: '📊',
    title: {
      en: 'Statistics Virtuoso',
      es: 'Virtuoso de la Estadística'
    },
    description: {
      en: 'Earned honors in Applied Statistics, mastering data analysis and probability',
      es: 'Obtuvo matrícula de honor en Estadística Aplicada, dominando análisis de datos y probabilidad'
    }
  },
  {
    icon: '🎓',
    title: {
      en: 'Academic Excellence',
      es: 'Excelencia Académica'
    },
    description: {
      en: 'Maintained a GPA of 8.95/10 throughout the degree',
      es: 'Mantuvo una nota media de 8.95/10 durante la carrera'
    }
  },
  {
    icon: '💼',
    title: {
      en: 'Industry Experience',
      es: 'Experiencia Profesional'
    },
    description: {
      en: 'Completed internship at NTTData, working with Oracle ERP for Securitas Direct',
      es: 'Completó prácticas en NTTData, trabajando con Oracle ERP para Securitas Direct'
    }
  },
  {
    icon: '🤖',
    title: {
      en: 'AI Research',
      es: 'Investigación en IA'
    },
    description: {
      en: 'Fuzzy Cluster-Based Classifier Chain, advancing fuzzy clustering research',
      es: 'Fuzzy Cluster-Based Classifier Chain, avanzando en la investigación de clustering difuso'
    }
  },
  {
    icon: '🔒',
    title: {
      en: 'Next Achievement',
      es: 'Próximo Logro'
    },
    description: {
      en: 'This achievement is still locked. Keep progressing!',
      es: 'Este logro aún está bloqueado. ¡Sigue progresando!'
    },
    unlocked: false
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      {/* Character Sheet Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 grid md:grid-cols-[1fr,2fr] gap-8"
      >
        {/* Character Basic Info */}
        <div className="bg-game-secondary rounded-lg p-6 h-fit">
          <div className="border-2 border-game-accent rounded-lg p-4">
            <div className="flex justify-center mb-6">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-game-accent">
                <Image
                  src="/yo.jpg"
                  alt="Luis Mellado"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
            <h2 className="text-xl font-bold text-white mb-4">Character Info</h2>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span className="text-gray-300">Class:</span>
                <span className="font-bold">Software Engineer</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-300">Level:</span>
                <span className="font-bold">4th Year</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-300">Specialization:</span>
                <span className="font-bold">AI, Backend</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-300">Guild:</span>
                <span className="font-bold">University of Seville</span>
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold text-white mb-3">Tech Arsenal</h3>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { name: 'Python', icon: '🐍' },
                  { name: 'Java', icon: '☕' },
                  { name: 'JavaScript', icon: '🟨' },
                  { name: 'TypeScript', icon: '🔷' },
                  { name: 'React', icon: '⚛️' },
                  { name: 'Next.js', icon: '▲' },
                  { name: 'Node.js', icon: '🟩' },
                  { name: 'SQL', icon: '🗃️' },
                  { name: 'Git', icon: '📚' },
                  { name: 'Docker', icon: '🐋' },
                  { name: 'Oracle ERP', icon: '📊' },
                  { name: 'TensorFlow', icon: '🧠' }
                ].map((tech, index) => (
                  <div key={index} className="relative group">
                    <span className="text-2xl cursor-help">{tech.icon}</span>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-game-primary text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Character Description and Languages */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-game-secondary rounded-lg p-6"
        >
          <h1 className="text-4xl font-bold mb-4">Luis Mellado</h1>
          <div className="prose prose-invert mb-8">
            <p className="text-lg leading-relaxed mb-4">
              A passionate Software Engineering student specializing in artificial intelligence research and software development. 
              Currently on a quest to innovate in the realm of AI, particularly in fuzzy clustering and multi-label classification.
            </p>
            <p className="text-lg leading-relaxed">
              With a strong foundation in Python, Java, and JavaScript, I craft solutions that bridge the gap between complex 
              algorithms and user-friendly applications. My journey includes leading teams, automating processes, and constantly 
              seeking new challenges in the vast world of technology.
            </p>
          </div>

          {/* Languages Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                language: 'Spanish',
                level: 'Native',
                icon: '🇪🇸',
                description: 'Native speaker with perfect command'
              },
              {
                language: 'English',
                level: 'Professional',
                icon: '🇬🇧',
                description: 'Professional working proficiency'
              },
              {
                language: 'German',
                level: 'Basic',
                icon: '🇩🇪',
                description: 'Basic communication skills'
              }
            ].map((lang, index) => (
              <div key={index} className="bg-game-primary/20 rounded-lg p-4 border border-game-accent/30">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{lang.icon}</span>
                  <div>
                    <h3 className="font-bold">{lang.language}</h3>
                    <p className="text-sm text-gray-300">{lang.level}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">{lang.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Main Menu - Fixed Size Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            href: '/skills',
            icon: '🎮',
            title: { en: 'Skill Tree', es: 'Árbol de Habilidades' },
            description: { en: 'Explore abilities and powers', es: 'Explora habilidades y poderes' }
          },
          {
            href: '/quest-log',
            icon: '📜',
            title: { en: 'Quest Log', es: 'Registro de Misiones' },
            description: { 
              en: 'Education, Work Experience, Projects', 
              es: 'Educación, Experiencia Laboral, Proyectos' 
            }
          },
          {
            href: '/contact',
            icon: '📫',
            title: { en: 'Send Message', es: 'Enviar Mensaje' },
            description: { en: 'Start a new quest together', es: 'Comencemos una nueva misión juntos' }
          }
        ].map((item) => (
          <Link href={item.href} key={item.href} passHref>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-game-secondary rounded-lg p-6 cursor-pointer group relative overflow-hidden h-[200px] flex flex-col justify-center"
            >
              <div className="absolute inset-0 bg-game-accent opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="flex items-center gap-4">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.title.en}</h3>
                  <p className="text-sm text-gray-300">{item.description.en}</p>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Achievements Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-12 bg-game-secondary rounded-lg p-6"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Achievements Unlocked 🏆</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {achievements.map((achievement, index) => (
            <Achievement key={index} {...achievement} />
          ))}
        </div>
      </motion.div>
    </main>
  );
}