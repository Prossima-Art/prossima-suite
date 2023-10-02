// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Hero from './sections/hero/hero';
import Subtitle from './sections/subtitle/subtitle';
import ProssimaAi from './sections/sectionAi/prossimaAi';
import ProssimaDev from './sections/sectionDev/prossimaDev';
import ProssimaXr from './sections/sectionXr/prossimaXr';
import ProssimaUx from './sections/sectionUx/prossimaUx';
import Footer from './sections/footer/footer';
import FaqSection from './sections/faq/faqSection';
import Navbar from './sections/navbar/navbar';

function App() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Subtitle/>
   <ProssimaAi/>
   <ProssimaDev/>
   <ProssimaUx/>
   <ProssimaXr/>
   <FaqSection/>
   <Footer/>
   </>
  );
}

export default App;
