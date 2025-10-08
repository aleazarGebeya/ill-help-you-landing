export default function ProjectDetailPage() {
  return (
    <div className='container mx-auto px-4 py-16'>
      <h1 className='text-4xl font-bold'>Project Title</h1>
      <p className='text-gray-400 mt-2'>A detailed description of the project will go here.</p>
      <div className='mt-8'>
        <img src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop' alt='Project Image' className='rounded-lg' />
      </div>
    </div>
  );
}