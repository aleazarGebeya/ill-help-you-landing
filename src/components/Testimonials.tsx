const testimonials = [
  { name: 'Adebayo Adekunle', company: 'Tech Solutions Ltd.', text: 'Dala is a true professional. The quality of work is exceptional. I would recommend them to anyone.' },
  { name: 'Ngozi Okonjo', company: 'Creative Designs Inc.', text: 'Working with Dala was a pleasure. They are creative, responsive, and delivered a fantastic final product.' },
  { name: 'Kwame Nkrumah', company: 'Innovate Africa', text: 'The best developer I have ever worked with. The attention to detail is second to none.' },
];

export default function Testimonials() {
  return (
    <section id='testimonials' className='py-16'>
      <h2 className='text-3xl font-bold text-center mb-8'>What My Clients Say</h2>
      <div className='grid md:grid-cols-3 gap-8'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='bg-gray-800/50 p-6 rounded-lg'>
            <p className='text-gray-300 mb-4'>`{testimonial.text}`</p>
            <p className='font-bold'>{testimonial.name}</p>
            <p className='text-sm text-gray-500'>{testimonial.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}