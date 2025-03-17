import { motion } from 'framer-motion';
import Image from 'next/image';

interface QuestStep {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  date: string;
  image: string;
  achievements?: string[];
  type?: string;
}

const questSteps: QuestStep[] = [
  {
    title: "Pawtel",
    subtitle: "Team Project",
    description: "Pet Accommodation Platform",
    icon: "🏠",
    date: "2025",
    image: "/pawtel.png",
    type: "Team Project",
    achievements: [
      "Led team of 14 developers",
      "Developed frontend using Vue.js",
      "Delivered functional MVP"
    ]
  },
  {
    title: "AI Research",
    subtitle: "University of Seville",
    description: "Fuzzy Cluster-Based Classifier Chain",
    icon: "🤖",
    date: "2024",
    image: "/fccc.jpeg",
    type: "Thesis Project",
    achievements: [
      "Improved multi-label classification algorithm",
      "Integrated Fuzzy C-Means for label grouping",
      "Conducted experiments with real-world datasets"
    ]
  },
  {
    title: "Work Experience",
    subtitle: "NTTData",
    description: "Oracle ERP Development for Securitas Direct",
    icon: "💼",
    date: "2023",
    image: "/ntt-data.jpg",
    achievements: [
      "Managed incidents related to employee onboarding",
      "Developed SQL queries and reports",
      "Automated tasks using Python"
    ]
  },
  {
    title: "Customer Support",
    subtitle: "Hermanos Castro",
    description: "Waiter and Customer Support",
    icon: "👥",
    date: "2021 - 2024",
    image: "/roberto.jpg",
    achievements: [
      "Managed food bar operations",
      "Handled phone support and reservations",
      "Developed customer service skills"
    ]
  },
  {
    title: "Education",
    subtitle: "University of Seville",
    description: "Software Engineering Degree",
    icon: "🎓",
    date: "2020 - Present",
    image: "/etsii.jpg",
    achievements: ["GPA: 8.95/10"]
  },
  {
    title: "High School",
    subtitle: "Montealto, Jerez de la Frontera",
    description: "Technological Sciences",
    icon: "📚",
    date: "2019 - 2021",
    image: "/montealto.jpg",
    achievements: ["GPA: 9.9/10"]
  }
];

export default function QuestLog() {
  return (
    <div className="relative py-12">
      {/* Path Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-game-accent/30 transform -translate-x-1/2" />

      {/* Quest Steps */}
      <div className="relative space-y-16">
        {questSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Content */}
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <div className="bg-game-secondary/50 rounded-lg p-6 border border-game-accent/30 hover:border-game-accent transition-colors">
                <div className="flex items-start gap-4">
                  {/* Image */}
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{step.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        <p className="text-game-accent">{step.subtitle}</p>
                      </div>
                    </div>
                    {step.type && (
                      <p className="text-sm text-gray-400 mb-2">{step.type}</p>
                    )}
                    <p className="text-gray-300 mb-2">{step.description}</p>
                    <p className="text-sm text-gray-400 mb-3">{step.date}</p>
                    
                    {/* Achievements */}
                    {step.achievements && (
                      <ul className="space-y-1">
                        {step.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                            <span className="text-game-accent">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Center Point */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-game-accent rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-game-primary rounded-full" />
            </div>

            {/* Empty Space for alternating layout */}
            <div className="hidden md:block w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
} 