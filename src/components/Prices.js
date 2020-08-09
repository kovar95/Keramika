import React from 'react';

const Prices = props => {
  return (
    <section className="wrapper">
      <div className="inner">
        <header className="special">
          <h2>Cenovnik</h2>
        </header>
        <table>
          <tbody>
            <tr>
              <th colSpan="2">Cene usluga postavljanja keramičkih pločica</th>
            </tr>
            <tr>
              <td>Postavljanje pločica</td>
              <td>od 8 € do 10 € - m2</td>
            </tr>
            <tr>
              <td>Stepenice</td>
              <td>od 8 € do 10 € - 1 dužni metar</td>
            </tr>
            <tr>
              <td>Cokle</td>
              <td>od 2 € do 2.5 € - 1 dužni metar</td>
            </tr>
            <tr>
              <td>Gerovanje</td>
              <td>od 5 € do 8 € - 1 dužni metar</td>
            </tr>
            <tr>
              <td>Prepravke tuđih radova</td>
              <td>pozovite nas</td>
            </tr>
            <tr>
              <td>Skidanje pločica</td>
              <td>od 1.5 € do 2 € - m2</td>
            </tr>
            <tr>
              <td>Postavljanje mozaika</td>
              <td>od 13 € do 16 € - m2</td>
            </tr>
            <tr>
              <td>Postavljanje dekorativnog kamena</td>
              <td>od 10 € do 16 € - m2</td>
            </tr>
            <tr>
              <td>Napomena</td>
              <td>
                U cenu nije uračunato sledeće : lepak za pločice, keramika,
                kamen, fug masa
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                Cene usluga postavljanja granita i granitnih pločica
              </th>
            </tr>
            <tr>
              <td>Postavljanje svih vrsta granita</td>
              <td>pozovite nas</td>
            </tr>
            <tr>
              <th colSpan="2">
                Cene usluga ugradnje mermera i mermernih pločica
              </th>
            </tr>
            <tr>
              <td>Postavljanje mermernih ploča</td>
              <td>pozovite nas</td>
            </tr>
            <tr>
              <th colSpan="2">Cene usluga ugradnje prirodnog kamena</th>
            </tr>
            <tr>
              <td>Ugradnja prirodnog kamena svih vrsta i oblika</td>
              <td>od 8 € do 18 € - m2</td>
            </tr>
            <tr>
              <th colSpan="2">Cene ostalih usluga</th>
            </tr>
            <tr>
              <td colSpan="2">Za sve ostale radnje cena po dogovoru</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Prices;
