export default function Footer() {
  return (
    <footer className='bg-gray-900/50 border-t border-gray-800 py-8'>
      <div className='container mx-auto px-4 text-center text-gray-500'>
        <div className='flex justify-center space-x-4 mb-4'>
          <a href='#' className='hover:text-white'>Twitter</a>
          <a href='#' className='hover:text-white'>LinkedIn</a>
          <a href='#' className='hover:text-white'>GitHub</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Dala. All rights reserved.</p>
      </div>
    </footer>
  );
}