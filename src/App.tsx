import Header from './components/Header';
import Hero from './components/Hero';
import MasonryGallery from './components/MasonryGallery';
import About from './components/About';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Awards from './components/Awards';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-gray-900 text-white min-h-screen'>
      <Header />
      <main className='container mx-auto px-4 py-8'>
        <Hero />
        <MasonryGallery />
        <About />
        <Testimonials />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;