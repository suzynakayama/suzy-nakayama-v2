import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Projects from '../../components/Projects';
import Hero from '../../components/Hero';
import Contact from '../../components/Contact';

const Home = () => {
  // This is the main page component for the application.
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1 space-y-24'>
        <Hero />

        <Projects />

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
