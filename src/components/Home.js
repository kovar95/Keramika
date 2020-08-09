import React, { Fragment } from 'react';
import Banner from './Banner';
import Services from './Services';

const Home = props => {
  return (
    <Fragment>
      <Banner />
      <Services />
    </Fragment>
  );
};

export default Home;
