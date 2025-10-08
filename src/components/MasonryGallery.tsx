const projects = [
  { id: 1, title: 'Project One', category: 'Web Design', imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop' },
  { id: 2, title: 'Project Two', category: 'Branding', imageUrl: 'https://images.unsplash.com/photo-1559028005-4ef2154a0194?w=600&h=800&fit=crop' },
  { id: 3, title: 'Project Three', category: 'Mobile App', imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=900&fit=crop' },
  { id: 4, title: 'Project Four', category: 'Web Development', imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop' },
  { id: 5, title: 'Project Five', category: 'UI/UX', imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop' },
  { id: 6, title: 'Project Six', category: 'Illustration', imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=800&fit=crop' },
];

export default function MasonryGallery() {
  return (
    <section id='work' className='py-16'>
      <h2 className='text-3xl font-bold text-center mb-8'>My Work</h2>
      <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'>
        {projects.map((project) => (
          <div key={project.id} className='relative overflow-hidden rounded-lg group break-inside-avoid'>
            <img src={project.imageUrl} alt={project.title} className='w-full h-auto object-cover' />
            <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
              <h3 className='text-white text-lg font-bold'>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}