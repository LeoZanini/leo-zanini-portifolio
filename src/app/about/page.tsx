import Image from 'next/image';
import { Header } from '../../components/header';

export default function About() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex flex-col justify-center">
        <Header />
      </div>
      <main className="flex flex-col justify-center h-full w-screen place-items-center">
        <Image
          src={'/leonardo-zanini.jpg'}
          alt="Leonardo Zanini's picture"
          className="object-cover w-[60vh] h-[40vh] min-h-64"
          width={900}
          height={1020}
        />
        <h1 className="font-bold text-5xl">H E L L O</h1>
        <h2 className="">this is a sample text</h2>
      </main>
      <footer className=""></footer>
    </div>
  );
}
