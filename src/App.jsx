import Navbar from './components/layout/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Catalog from './components/Catalog/Catalog';
import Boxes from './components/Boxes/Boxes';
import Contact from './components/Contact/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Catalog />
        <Boxes />
        <Contact />
      </main>
    </>
  );
}
