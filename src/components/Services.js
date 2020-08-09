import React, { Fragment } from 'react';
import mermer from '../images/mermer.png';
import ceramics from '../images/ceramics.ico';
import floor from '../images/floor.png';
import home from '../images/home.png';
import world from '../images/world.png';
import wall from '../images/wall.png';

const Services = props => {
  return (
    <Fragment>
      <section className="wrapper">
        <div className="inner">
          <header className="special">
            <h2>Naše usluge</h2>
            <p>
              Keramičke pločice su u upotrebi u stambenim objektima već
              vekovima. Tehnologija proizvodnje je napredovala te današnje
              pločice ne služe samo za kupatila, kuhinje i hodnike nego za sve
              prostorije, pa i spoljne površine.
            </p>
          </header>
          <div className="highlights">
            <section>
              <div className="content">
                <header>
                  <a href="!#" className="icon">
                    <img src={ceramics} alt="" />
                  </a>
                  <h3>Postavljanje Keramičkih Pločica</h3>
                </header>
                <p>
                  Kod odabira dezena i boje pločica budite pažljivi i gledajte
                  da odaberete pravi dezen koji će se uklopiti u prostor, a
                  kvalitet i cena je takođe važna. Pločice koje se lepe na zid
                  nisu iste kao one koje služe za oblaganje podova, pa i o tome
                  povedite računa.
                </p>
              </div>
            </section>
            <section>
              <div className="content">
                <header>
                  <a href="!#" className="icon">
                    <img src={mermer} alt="" />
                  </a>
                  <h3>Postavljanje Granita I Granitnih Pločica</h3>
                </header>
                <p>
                  Granit spada u vrstu kamena I nastao je njegovim izlivanjem. U
                  zavisnosti od vrste minerala granit možete naći u raznim
                  bojama I nijansama. Koristio se u gradjevini mnogo godina pre,
                  najviše u Egiptu odnosno kod piramida, takodje korišćen za
                  mnoge spomenike, spomen ploče I dr.
                </p>
              </div>
            </section>
            <section>
              <div className="content">
                <header>
                  <a href="!#" className="icon">
                    <img src={floor} alt="" />
                  </a>
                  <h3>Ugradnja Mermera I Mermernih Pločica</h3>
                </header>
                <p>
                  Mermer spada u jedan od najznačajnijih gradjevinskih
                  materijala kojim možete obložiti enterijer. Visok sjaj i
                  veliki izbor boja njegove su karakteristike. Pored estetskog
                  faktora jer zaista izgleda prefinjeno i luksuzno mermer je
                  čvrst i jak materijal, jednostavno se održava otporan je na
                  vodu, vatru kao i na sredstva koja sadrže hemikalije.
                </p>
              </div>
            </section>
            <section>
              <div className="content">
                <header>
                  <a href="!#" className="icon">
                    <img src={home} alt="" />
                  </a>
                  <h3>Ugradnja Prirodnog Kamena</h3>
                </header>
                <p>
                  Prirodni kamen možete koristiti ukoliko želite da ukrasite i
                  obložite unutrašnje zidove, fasadu, stepenište, ogradu,
                  terasu, kamin, bazen, ako želite da popločate dvorište i sl.
                </p>
              </div>
            </section>
            <section>
              <div className="content">
                <header>
                  <a href="!#" className="icon">
                    <img src={wall} alt="" />
                  </a>
                  <h3>Poravnavanje Zidova i Podova</h3>
                </header>
                <p>
                  Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing
                  gravida odio porttitor sem non mi integer non faucibus.
                </p>
              </div>
            </section>
            <section>
              <div className="content">
                <header>
                  <a href="!#" className="icon">
                    <img src={world} alt="" />
                  </a>
                  <h3>Adaptacija Kupatila</h3>
                </header>
                <p>
                  Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing
                  gravida odio porttitor sem non mi integer non faucibus.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section id="cta" className="wrapper">
        <div className="inner">
          <h2>Pored navedenih radova radimo i:</h2>
          <p>
            Adaptacije i prepravke kupatila, kuhinja, terasa, stepenica.
            Štanglice od kamena, mozaike, hidroizolaciju. Sve pripremne radnje,
            rušenje stare keramike, poravnavanje zidova, nivelisanje podova
            nivelir masom.
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default Services;
