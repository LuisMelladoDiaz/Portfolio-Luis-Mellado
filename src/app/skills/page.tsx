'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { 
  faLaptopCode,
  faDatabase,
  faServer,
  faCode,
  faTable,
  faCogs,
  faGears,
  faBrain,
  faChevronDown,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import {
  faPython,
  faJava,
  faVuejs,
  faHtml5,
  faCss3,
  faReact,
  faJs,
  faGithub,
  faDocker
} from '@fortawesome/free-brands-svg-icons';

interface Position {
  x: number;
  y: number;
}

interface Skill {
  name: string;
  level: number;
  icon: IconDefinition;
  position: Position;
}

interface SkillBranch {
  name: string;
  skills: Skill[];
  isExpanded?: boolean;
}

interface SkillTreeData {
  core: Skill;
  branches: SkillBranch[];
}

const NODE_SIZES = {
  core: 64, // 4rem
  main: 64, // 4rem
  skill: 56, // 3.5rem
};

const calculateNodeCenter = (x: number, y: number, isCore: boolean, isMain: boolean) => {
  const size = isCore || isMain ? NODE_SIZES.core : NODE_SIZES.skill;
  const offset = size / 2;
  return {
    x: x + (offset / 100) + 3,
    y: y + (offset / 100) + 4
  };
};

interface SkillConnectionProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  color?: string;
}

const SkillConnection = ({ startX, startY, endX, endY, color = "#FFD700", isFromCore = false, isToMain = false }: SkillConnectionProps & { isFromCore?: boolean; isToMain?: boolean }) => {
  const startCenter = calculateNodeCenter(startX, startY, isFromCore, false);
  const endCenter = calculateNodeCenter(endX, endY, false, isToMain);

  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <line
        x1={`${startCenter.x}%`}
        y1={`${startCenter.y}%`}
        x2={`${endCenter.x}%`}
        y2={`${endCenter.y}%`}
        stroke={color}
        strokeWidth="2"
        strokeDasharray="4"
        className="animate-pulse"
      />
    </svg>
  );
};

interface SkillNodeProps {
  name: string;
  level: number;
  icon: IconDefinition;
  x: number;
  y: number;
  isCore?: boolean;
  hasChildren?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
}

const SkillNode: React.FC<SkillNodeProps> = ({ name, level, icon, x, y, isCore = false, hasChildren = false, isExpanded = true, onToggle = () => {} }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className={`absolute cursor-pointer ${
        isCore ? 'bg-yellow-500' : 
        name.includes('/') ? 'bg-blue-400' : 'bg-blue-600'
      } rounded-full p-4 shadow-lg transition-all duration-300 ${
        hasChildren ? 'hover:scale-125 hover:shadow-xl hover:shadow-blue-500/30' : 'hover:scale-110'
      }`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        width: isCore || !name.includes('/') ? '4rem' : '3.5rem',
        height: isCore || !name.includes('/') ? '4rem' : '3.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: hasChildren ? 1 : 0.8
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={hasChildren ? onToggle : undefined}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <FontAwesomeIcon icon={icon} className="text-white text-xl" />
      {isHovered && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 text-white px-3 py-1 rounded whitespace-nowrap">
          <p className="font-semibold">{name}</p>
        </div>
      )}
    </motion.div>
  );
};

const skillTree: SkillTreeData = {
  core: {
    name: "Software Engineering",
    level: 8,
    icon: faLaptopCode,
    position: { x: 50, y: 15 }
  },
  branches: [
    {
      name: "Database",
      skills: [
        {
          name: "Database",
          level: 8,
          icon: faDatabase,
          position: { x: 10, y: 35 }
        },
        {
          name: "SQL",
          level: 8,
          icon: faDatabase,
          position: { x: 5, y: 55 }
        },
        {
          name: "HeidiSQL",
          level: 7,
          icon: faTable,
          position: { x: 0, y: 75 }
        },
        {
          name: "Oracle",
          level: 7,
          icon: faDatabase,
          position: { x: 15, y: 55 }
        }
      ]
    },
    {
      name: "Backend",
      skills: [
        {
          name: "Backend",
          level: 8,
          icon: faServer,
          position: { x: 30, y: 35 }
        },
        {
          name: "Django",
          level: 9,
          icon: faPython,
          position: { x: 25, y: 55 }
        },
        {
          name: "SpringBoot",
          level: 7,
          icon: faJava,
          position: { x: 35, y: 55 }
        },
        {
          name: "DevOps",
          level: 6,
          icon: faDocker,
          position: { x: 30, y: 75 }
        }
      ]
    },
    {
      name: "Frontend",
      skills: [
        {
          name: "Frontend",
          level: 8,
          icon: faCode,
          position: { x: 50, y: 35 }
        },
        {
          name: "Vue/Vite",
          level: 8,
          icon: faVuejs,
          position: { x: 45, y: 55 }
        },
        {
          name: "HTML/CSS",
          level: 9,
          icon: faHtml5,
          position: { x: 55, y: 55 }
        },
        {
          name: "Tailwind/SCSS",
          level: 8,
          icon: faCss3,
          position: { x: 50, y: 75 }
        }
      ]
    },
    {
      name: "AI & ML",
      skills: [
        {
          name: "AI & ML",
          level: 8,
          icon: faBrain,
          position: { x: 70, y: 35 }
        },
        {
          name: "Clustering",
          level: 9,
          icon: faBrain,
          position: { x: 65, y: 55 }
        },
        {
          name: "Fuzzy Logic",
          level: 9,
          icon: faCogs,
          position: { x: 75, y: 55 }
        },
        {
          name: "Multilabel Classification",
          level: 8,
          icon: faBrain,
          position: { x: 70, y: 75 }
        }
      ]
    },
    {
      name: "Soft Skills",
      skills: [
        {
          name: "Soft Skills",
          level: 9,
          icon: faGears,
          position: { x: 90, y: 35 }
        },
        {
          name: "Leadership",
          level: 8,
          icon: faCogs,
          position: { x: 85, y: 55 }
        },
        {
          name: "Communication",
          level: 9,
          icon: faCogs,
          position: { x: 100, y: 75 }
        },
        {
          name: "Teamwork",
          level: 9,
          icon: faCogs,
          position: { x: 95, y: 55 }
        }
      ]
    }
  ]
};

export default function Skills() {
  const [expandedBranches, setExpandedBranches] = React.useState<{ [key: string]: boolean }>({
    Database: false,
    Backend: false,
    Frontend: false,
    'AI & ML': false,
    'Soft Skills': false
  });

  const toggleBranch = (branchName: string) => {
    setExpandedBranches(prev => ({
      ...prev,
      [branchName]: !prev[branchName]
    }));
  };

  return (
    <div className="min-h-screen py-16 px-4 relative">
      <h1 className="text-4xl font-bold text-center mb-12">Skill Tree</h1>
      <div className="relative w-full" style={{ height: '70vh', maxHeight: '600px' }}>
        {/* Core Node */}
        <SkillNode
          name={skillTree.core.name}
          level={skillTree.core.level}
          icon={skillTree.core.icon}
          x={skillTree.core.position.x}
          y={skillTree.core.position.y}
          isCore={true}
        />

        {/* Branch Connections from Core */}
        {skillTree.branches.map((branch: SkillBranch, index: number) => (
          <SkillConnection
            key={`core-${index}`}
            startX={skillTree.core.position.x}
            startY={skillTree.core.position.y}
            endX={branch.skills[0].position.x}
            endY={branch.skills[0].position.y}
            isFromCore={true}
            isToMain={true}
          />
        ))}

        {/* Branch Nodes and Their Skills */}
        {skillTree.branches.map((branch: SkillBranch) => (
          <React.Fragment key={branch.name}>
            {branch.skills.map((skill: Skill, skillIndex: number) => (
              <React.Fragment key={`${branch.name}-skill-${skillIndex}`}>
                {skillIndex > 0 && expandedBranches[branch.name] && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SkillConnection
                      startX={branch.skills[0].position.x}
                      startY={branch.skills[0].position.y}
                      endX={skill.position.x}
                      endY={skill.position.y}
                      color={skillIndex === 0 ? "#FFD700" : "#4299e1"}
                      isFromCore={false}
                      isToMain={false}
                    />
                    <SkillNode
                      name={skill.name}
                      level={skill.level}
                      icon={skill.icon}
                      x={skill.position.x}
                      y={skill.position.y}
                      isCore={skillIndex === 0}
                      hasChildren={skillIndex === 0}
                      isExpanded={expandedBranches[branch.name]}
                      onToggle={() => toggleBranch(branch.name)}
                    />
                  </motion.div>
                )}
                {skillIndex === 0 && (
                  <SkillNode
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    x={skill.position.x}
                    y={skill.position.y}
                    isCore={skillIndex === 0}
                    hasChildren={skillIndex === 0}
                    isExpanded={expandedBranches[branch.name]}
                    onToggle={() => toggleBranch(branch.name)}
                  />
                )}
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
} 