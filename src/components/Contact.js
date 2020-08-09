import React from 'react';

const Contact = props => {
  return (
    <section className="wrapper">
      <div className="inner">
        <header className="special">
          <h2>Kontakt</h2>
          <p>Radove izvodimo na teritoriji i u okolini Beograda i Pančeva</p>
        </header>

        <div className="contact">
          <i className="icon fa-phone fa-4x"></i>
          <a href="tel:+381641346483">+381641346483</a>
        </div>
        <div className="contact">
          <i className="icon fa-instagram fa-4x"></i>
          <a href="http://instagram.com/mojkeramicar">mojkeramicar</a>
        </div>
        <div className="contact">
          <i className="icon fa-facebook fa-4x"></i>
          <a href="http://facebook.com/mojkeramicar">Moj keramicar</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
