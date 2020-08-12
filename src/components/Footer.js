import React from 'react';

const Footer = props => {
  return (
    <footer id="footer">
      <div className="inner">
        <div className="content">
          <section>
            <h3>Moj keramičar</h3>
            <p>
              Stojimo vam na rapolaganju za svaki vid saradnje. Vaša zamisao -
              naša realizacija. Pouzdanost u radu već 12 godina.
            </p>
          </section>
          <section>
            <h4>Pronađite nas na društvenim mrežama</h4>
            <ul className="plain">
              <li>
                <a href="tel:+381641346483">
                  <i className="icon fa-phone">&nbsp;</i>Phone
                </a>
              </li>
              <li>
                <a href="https://web.facebook.com/moj.keramicar">
                  <i className="icon fa-facebook">&nbsp;</i>Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/mojkeramicar/">
                  <i className="icon fa-instagram">&nbsp;</i>Instagram
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="copyright">
          &copy; <a href="https://kovar.imfast.io/">kovar95</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
