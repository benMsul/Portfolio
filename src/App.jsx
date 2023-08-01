import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import { StarsCanvas } from './components/canvas';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <div className='relative z-0'>
        <Skills />
        <StarsCanvas />
      </div>
      <Work />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      {<div className='h-[40px]'></div>}
    </div>
  );
};

export default App;