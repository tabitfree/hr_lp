import type { NextPage } from 'next';
import Hero from '../components/Sections/Hero';
import Clients from '../components/Sections/Clients';
import Cooperation from '../components/Sections/Cooperation/Cooperation';
import Campaignes from '../components/Sections/Campaignes';
import Collabs from '../components/Sections/Collabs/Collabs';
import PriceList from '../components/Sections/PriceList';
import Contact from '../components/Sections/Contact';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Clients />
      <Cooperation />
      <Campaignes />
      <Collabs />
      <PriceList />
      <Contact />
    </>
  );
};

export default Home;
