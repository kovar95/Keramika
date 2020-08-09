import React from 'react';
import banner from '../images/banner.mp4';

const Banner = props => {
  return (
    <section id="banner">
      <div className="inner">
        <h1>MOJ KERAMIČAR</h1>
        <p>Neka lepota naših pločica i kamena ulepša vaš život!</p>
      </div>
      {/* <video autoPlay loop muted playsInline src={banner}></video> */}
    </section>
  );
};

export default Banner;
