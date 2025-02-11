'use client';

import { motion } from 'framer-motion';
import {
  SiCplusplus,
  SiPython,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMongodb,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiTailwindcss,
} from 'react-icons/si';

const skills = [
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'SQL', icon: SiMysql, color: '#4479A1' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss3, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Express', icon: SiExpress, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
];

export default function SkillsSection() {
  return (
    <div className="w-full bg-[#000000] py-20 overflow-hidden" id="skill">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Expertise</h2>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{
              x: ['0%', '-50%'], // Instead of -100%, this makes the loop seamless
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40, // Slow and smooth
                ease: 'linear',
              },
            }}
            style={{ display: 'flex', width: 'max-content' }} // Ensures seamless scrolling
          >
            {[...skills, ...skills].map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-48 bg-[#0E0E10] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2"
                >
                  <div className="h-full flex flex-col items-center justify-center p-6">
                    <Icon
                      className="w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                    <div className="text-xl font-semibold text-white">{skill.name}</div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
