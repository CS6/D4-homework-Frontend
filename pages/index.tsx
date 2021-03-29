import { Fragment } from 'react';
// import { Navbar } from '../components';
import { cityNames } from '../values';
import { LimitCard } from '../components';

function Home() {
  return <Fragment children={LimitCard(cityNames)} />;
}

export default Home;
