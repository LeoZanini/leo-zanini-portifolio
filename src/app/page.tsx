'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Header } from './components/header';
import IconTypescript from './components/icons/typescript-icon';
import IconNextjs from './components/icons/next-js-icon';
import IconBxlReact from './components/icons/react-icon';
import IconBxlTailwindCss from './components/icons/tailwind-icon';
import IconBxlCss3 from './components/icons/css-icon';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const TechItems = [
  {
    name: 'Next.js',
    icon: <IconNextjs className="w-10 h-10" />,
    details: 'Experienced in building server-side rendered React applications with Next.js'
  },
  {
    name: 'Tailwind',
    icon: <IconBxlTailwindCss className="w-10 h-10" />,
    details: 'Proficient in using Tailwind CSS for rapid UI development'
  },
  {
    name: 'TypeScript',
    icon: <IconTypescript className="w-10 h-10" />,
    details: 'Strong TypeScript skills for building type-safe JavaScript applications'
  },
  {
    name: 'React',
    icon: <IconBxlReact className="w-10 h-10" />,
    details: 'Expert in React, including hooks, context, and state management'
  },
  {
    name: 'CSS',
    icon: <IconBxlCss3 className="w-10 h-10" />,
    details: 'Advanced CSS skills, including flexbox, grid, and animations'
  }
];

const Technologies = ({ isExpanded }: { isExpanded: boolean }) => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const handleTechClick = (e: React.MouseEvent, techName: string) => {
    e.stopPropagation();
    setSelectedTech(selectedTech === techName ? null : techName);
  };

  return (
    <>
      {TechItems.map((tech, index) => {
        const angle = (index * 360) / TechItems.length;
        const radius = 150; // Slightly larger than half of the circle's diameter
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <motion.button
            key={tech.name}
            className="absolute p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 z-20"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(10%, 0%)'
            }}
            onClick={(e) => handleTechClick(e, tech.name)}
            whileHover={{ scale: 1.1 }}
            animate={isExpanded ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
            aria-label={tech.name}>
            <div className="" title={tech.name}>
              {tech.icon}
            </div>
          </motion.button>
        );
      })}
      <AnimatePresence>
        {isExpanded && selectedTech && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute mt-4 p-4 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg w-full z-20">
            <h3 className="text-lg font-semibold mb-2">{selectedTech}</h3>
            <p>{TechItems.find((tech) => tech.name === selectedTech)?.details}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const IntroCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative flex flex-col items-center justify-center transition-all duration-500 ${
        isExpanded ? 'w-full md:flex-row md:rounded-l-full md:justify-start' : 'w-[340px] h-[340px]'
      }`}
      initial={false}
      animate={isExpanded ? { width: '100%', height: 'auto' } : { width: 340, height: 340 }}>
      <motion.button
        className={`relative flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-full overflow-hidden ${
          isExpanded
            ? 'w-full md:flex-row md:rounded-l-full md:justify-start'
            : 'w-[300px] h-[300px]'
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={false}
        animate={isExpanded ? { width: '100%', height: 'auto' } : { width: 300, height: 300 }}>
        <div className={`flex justify-center ${isExpanded ? 'md:justify-start mb-4 md:mb-0' : ''}`}>
          <Image
            src="/leonardo-zanini.jpg"
            alt="Leonardo Zanini's picture"
            className={`object-cover ${
              isExpanded ? 'w-40 h-40 md:w-64 md:h-64 md:rounded-l-full' : 'w-full h-full'
            } shadow-2xl border`}
            width={340}
            height={340}
          />
        </div>
        <motion.div
          className={`absolute bottom-4 right-4 text-right ${isExpanded ? 'hidden' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}>
          <motion.div
            className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}>
            <motion.h1
              className="text-xl font-bold text-white"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}>
              Hi, I'm Leo!
            </motion.h1>
            <motion.p
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1, scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
              className="text-sm mt-1 text-white">
              Click to learn more
            </motion.p>
          </motion.div>
        </motion.div>

        {isExpanded && (
          <motion.div
            className="flex flex-col p-4 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            <motion.h1
              className="text-2xl text-center md:text-left"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}>
              Hi, I'm Leo!
            </motion.h1>
            <motion.p
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 1.2 }}
              className="text-center md:text-left">
              I'm a software engineer and I love to code. I'm passionate about technology and I'm
              always looking for new challenges.
            </motion.p>
          </motion.div>
        )}
      </motion.button>
      <Technologies isExpanded={isExpanded} />
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <motion.div
        className="flex flex-col justify-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <Header />
      </motion.div>
      <main className="flex flex-col flex-grow items-center justify-center px-4 py-8">
        <IntroCard />
      </main>
      <motion.footer
        className="p-4 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}>
        © 2023 Leonardo Zanini
      </motion.footer>
    </div>
  );
}
