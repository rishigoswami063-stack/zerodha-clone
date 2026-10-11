import Hero from '../components/home/Hero';
import Ecosystem from '../components/home/Ecosystem';
import Pricing from '../components/home/Pricing';
import Education from '../components/home/Education';
import OpenAccount from '../components/home/OpenAccount';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Ecosystem />
      <Pricing />
      <Education />
      <OpenAccount />
    </div>
  );
};

export default Home;
