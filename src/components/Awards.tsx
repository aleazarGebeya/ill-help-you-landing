const awards = [
  { name: 'Awwwards Site of the Day', year: '2024' },
  { name: 'CSS Design Awards - Best UI', year: '2023' },
  { name: 'FWA of the Day', year: '2023' },
];

export default function Awards() {
  return (
    <section id='awards' className='py-16'>
      <h2 className='text-3xl font-bold text-center mb-8'>Awards & Recognition</h2>
      <div className='text-center'>
        {awards.map((award, index) => (
          <div key={index} className='mb-2'>
            <p className='text-lg font-semibold'>{award.name} - <span className='text-gray-400'>{award.year}</span></p>
          </div>
        ))}
      </div>
    </section>
  );
}