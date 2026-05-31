import Navbar   from './components/Navbar/Navbar';
import Hero     from './components/Hero/Hero';
import Stats    from './components/Stats/Stats';
import About    from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Pricing  from './components/Pricing/Pricing';
import Contact  from './components/Contact/Contact';
import Footer   from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Projects />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
