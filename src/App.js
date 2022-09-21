import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Oasis from './Components/contents/Oasis';
import About from './Components/contents/About';
import NFT from './Components/contents/NFT';
import Contact from './Components/Contact';
import FAQ from './Components/contents/FAQ';
import { Fade } from "react-awesome-reveal";

import './scss/App.scss';

import data from './data';

function App() {
  return (
    <Container fluid className='app'>
      <Contact />
      <Header />
      <Container fluid className='content'>
        <div className='oasis py-6'>
          <Fade triggerOnce direction='up'>
            <Oasis />
          </Fade>
        </div>

        <Fade triggerOnce direction='up' delay={300} duration={1500}>
          <hr />
        </Fade>

        <div className='about py-6'>
          <About />
        </div>

        <Fade triggerOnce direction='up' delay={300} duration={1500}>
          <hr />
        </Fade>

        <div className='nft py-6'>
          <NFT data={data.roadmap}/>
        </div>

        <Fade triggerOnce direction='up' delay={300} duration={1500}>
          <hr />
        </Fade>

        <div className='faq py-6'>
          <Fade triggerOnce direction='up'>
            <FAQ data={data.faq}/>
          </Fade>
        </div>
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
