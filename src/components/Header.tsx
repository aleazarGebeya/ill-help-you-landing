import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <a href='/' className='text-2xl font-bold tracking-tighter'>Dala.dev</a>
        <nav className='hidden md:flex space-x-6 items-center'>
          <a href='#work' className='hover:text-purple-400 transition-colors'>Work</a>
          <a href='#about' className='hover:text-purple-400 transition-colors'>About</a>
          <a href='#contact' className='hover:text-purple-400 transition-colors'>Contact</a>
        </nav>
        <a href='#' className='hidden md:inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors'>Resume</a>
        <button className='md:hidden text-white'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
          </svg>
        </button>
      </div>
    </header>
  );
}