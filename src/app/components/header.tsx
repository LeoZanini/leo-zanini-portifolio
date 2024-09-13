'use client';

import { useRouter } from 'next/navigation';

export const Header = () => {
  const route = useRouter();

  const handleNav = (path: string) => {
    route.push(`/${path}`);
  };
  return (
    <header className="flex flex-col justify-center place-content-center p-2 m-4 text-white rounded-full max-w-xs mx-auto border">
      <nav>
        <ul className="flex space-x-4 text-gray-200">
          <button
            className="border-r-2 px-4 hover:text-white transition-colors duration-700"
            onClick={() => handleNav('')}>
            Home
          </button>
          <button
            className="hover:text-white transition-colors duration-700"
            onClick={() => handleNav('contact')}>
            Contact
          </button>
          <button
            className="border-l-2 px-4 hover:text-white  transition-colors duration-700"
            onClick={() => handleNav('about')}>
            About me
          </button>
        </ul>
      </nav>
    </header>
  );
};
