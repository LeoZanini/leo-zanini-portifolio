import Image from 'next/image';
import { Header } from './components/header';

const TechItems = [
  { name: '', icon: 'path/to/icon' },
  { name: '', icon: 'path/to/icon' },
  { name: '', icon: 'path/to/icon' }
];

const Techlogies = () => {
  return (
    <div>
      {['React', 'Node', 'TypeScript', 'GraphQL', 'AWS', 'Docker', 'Kubernetes'].map((tech, i) => (
        <div key={i} className="flex p-2 border rounded-full m-2">
          <p>{tech}</p>
        </div>
      ))}
    </div>
  );
};

const IntroCard = () => {
  return (
    <div className="flex p-4 border rounded-full w-screen">
      <Image
        src={'/leonardo-zanini.jpg'}
        alt="Leonardo Zanini's picture"
        className="object-cover w-[40vh] h-[40vh] min-h-64 rounded-l-full"
        width={600}
        height={1020}
      />
      <Techlogies />
      <div className="flex flex-col p-4">
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
