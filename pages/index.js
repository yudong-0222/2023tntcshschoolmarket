import { Footer, Navbar } from '../components';
import { About, Menu, Explore, GetStarted, Hero, WhatsNew, World } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Menu />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <div className="gradient-04 z-0" />
    </div>
    <Footer />
  </div>
);

export default Home;
