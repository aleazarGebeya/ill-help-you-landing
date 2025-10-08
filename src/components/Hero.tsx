export default function Hero() {
  return (
    <section id='hero' className='text-center py-20 md:py-32'>
      <h1 className='text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 animate-fade-in-down'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Creative Developer</span> & Designer
      </h1>
      <p className='text-lg md:text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up'>
        I design and build beautiful and user-friendly websites. I am passionate about creating modern and innovative digital experiences.
      </p>
       <div className='mt-8 flex justify-center gap-4'>
        <a href='#contact' className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105'>Get in Touch</a>
        <a href='#work' className='bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105'>View My Work</a>
      </div>
    </section>
  );
}