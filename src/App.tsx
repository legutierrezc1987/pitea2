import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Products from './components/sections/Products';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import ContactWhatsApp from './components/ui/ContactWhatsApp';

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <Products />
        <Gallery />
        <Contact />
      </Layout>
      <ContactWhatsApp />
    </>
  );
}

export default App;
