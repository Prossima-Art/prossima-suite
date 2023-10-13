// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "./sections/hero/hero";
import Subtitle from "./sections/subtitle/subtitle";
import ProssimaAi from "./sections/sectionAi/prossimaAi";
import ProssimaDev from "./sections/sectionDev/prossimaDev";
import ProssimaXr from "./sections/sectionXr/prossimaXr";
import ProssimaUx from "./sections/sectionUx/prossimaUx";

import FaqSection from "./sections/faq/faqSection";

function App() {
  return (
    <>
      <Hero />
      <Subtitle />
      <ProssimaAi />
      <ProssimaDev />
      <ProssimaUx />
      <ProssimaXr />
      <FaqSection />
    </>
  );
}

export default App;
