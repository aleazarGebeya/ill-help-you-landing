export default function About() {
  return (
    <section id='about' className='py-16 bg-gray-800/20 rounded-lg my-16'>
      <div className='container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center'>
        <div>
          <h2 className='text-3xl font-bold mb-4'>About Me</h2>
          <p className='text-gray-400 mb-4'>
            I am a creative developer and designer based in Lagos, Nigeria. I have a passion for creating beautiful, intuitive, and highly functional websites and applications. With over 5 years of experience in the field, I have had the opportunity to work on a variety of projects for clients all over the world.
          </p>
          <a href='#' className='text-purple-400 hover:underline'>Learn more about my journey</a>
        </div>
        <div className='relative h-64 md:h-96'>
          <img src='https://images.unsplash.com/photo-1557862921-37829c790f19?w=800&h=800&fit=crop' alt='About me' className='rounded-lg object-cover w-full h-full' />
        </div>
      </div>
    </section>
  );
}