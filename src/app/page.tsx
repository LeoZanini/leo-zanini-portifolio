import Image from 'next/image';
import { Header } from './components/header';
import IconTypescript from './components/icons/typescript-icon';
import IconNextjs from './components/icons/next-js-icon';
import IconBxlReact from './components/icons/react-icon';
import IconBxlTailwindCss from './components/icons/tailwind-icon';
import IconBxlCss3 from './components/icons/css-icon';

const TechItems = [
  { name: 'Next.js', icon: <IconNextjs /> },
  { name: 'Tailwind', icon: <IconBxlTailwindCss /> },
  { name: 'TypeScript', icon: <IconTypescript /> },
  { name: 'React', icon: <IconBxlReact /> },
  { name: 'Css', icon: <IconBxlCss3 /> }
];

const Techlogies = () => {
  return (
    <>
      {TechItems.map((tech, i) => (
        <div
          key={i}
          className="flex p-2 border-b rounded-full justify-center place-items-center mx-1">
          <p className="p-1">{tech.icon}</p>
          <p>{tech.name}</p>
        </div>
      ))}
    </>
  );
};

const IntroCard = () => {
  return (
    <div className="flex p-4 border rounded-full w-screen">
      <Image
        src={'/leonardo-zanini.jpg'}
        alt="Leonardo Zanini's picture"
        className="object-cover w-[40vh] h-[40vh] min-h-64 rounded-l-full pr-4 shadow-2xl"
        width={600}
        height={1020}
      />
      <div className="flex flex-col p-4 border-l">
        <div className="flex justify-start place-items-center mb-4">
          <Techlogies />
        </div>
        <h1 className="text-2xl pb-4">Hi i'm Leo!</h1>
        <p>
          I'm a software engineer and I love to code. I'm passionate about technology and I'm always
          looking for new challenges
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex flex-col justify-center">
        <Header />
      </div>
      <main className="flex flex-col h-full w-screen place-items-center">
        <IntroCard />
        <h1 className="font-bold text-5xl">H E L L O</h1>
        <h2 className="">this is a sample text</h2>
      </main>
      <footer className=""></footer>
    </div>
  );
}
