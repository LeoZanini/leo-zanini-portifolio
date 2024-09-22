'use client';

import Image from 'next/image';
import { Header } from './components/header';
import IconTypescript from './components/icons/typescript-icon';
import IconNextjs from './components/icons/next-js-icon';
import IconBxlReact from './components/icons/react-icon';
import IconBxlTailwindCss from './components/icons/tailwind-icon';
import IconBxlCss3 from './components/icons/css-icon';
import { motion } from 'framer-motion';

const TechItems = [
  { name: 'Next.js', icon: <IconNextjs /> },
  { name: 'Tailwind', icon: <IconBxlTailwindCss /> },
  { name: 'TypeScript', icon: <IconTypescript /> },
  { name: 'React', icon: <IconBxlReact /> },
  { name: 'CSS', icon: <IconBxlCss3 /> }
];

const Technologies = () => {
  return (
    <>
      {TechItems.map((tech, i) => (
        <motion.div
          key={i}
          className="flex hover:bg-white hover:text-purple-950 hover:border-b-purple-500 p-2 border-b-2 shadow-md rounded-full justify-center place-items-center mx-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ scale: 1.1 }}>
          <motion.p className="p-1">{tech.icon}</motion.p>
          <motion.p>{tech.name}</motion.p>
        </motion.div>
      ))}
    </>
  );
};

const IntroCard = () => {
  return (
    <motion.div
      className="flex p-4 border rounded-full w-screen"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}>
      <Image
        src={'/leonardo-zanini.jpg'}
        alt="Leonardo Zanini's picture"
        className="object-cover w-[40vh] h-[40vh] min-h-64 rounded-l-full pr-4 shadow-2xl"
        width={600}
        height={1020}
      />

      <motion.div
        className="flex flex-col p-4 border-l"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}>
        <div className="flex justify-start place-items-center mb-4">
          <Technologies />
        </div>
        <motion.h1
          className="text-2xl pb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}>
          Hi, I'm Leo!
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}>
          I'm a software engineer and I love to code. I'm passionate about technology and I'm always
          looking for new challenges
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <motion.div
        className="flex flex-col justify-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <Header />
      </motion.div>
      <main className="flex flex-col h-full w-screen place-items-center">
        <IntroCard />
        <motion.h1
          className="font-bold text-5xl mt-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}>
          H E L L O
        </motion.h1>
        <motion.h2
          className="mt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}>
          this is a sample text
        </motion.h2>
      </main>
      <motion.footer
        className="mt-auto p-4 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}>
        © 2023 Leonardo Zanini
      </motion.footer>
    </div>
  );
}
