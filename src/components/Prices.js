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
              <th colSpan="2">Keramičarski Radovi, Adaptacija kupatila</th>
            </tr>
            <tr>
              <td>Postavljanje keramičkih i granitnih pločica</td>
              <td>9-12 € / m2</td>
            </tr>
            <tr>
              <td>Postavljanje mermernih i granitnih ploča (2-3cm debljine)</td>
              <td>12-14 € / m2</td>
            </tr>
            <tr>
              <td>Postavljanje ukrasnog prirodnog kamena</td>
              <td>15-25 € / m2</td>
            </tr>
            <tr>
              <td>Stepenice</td>
              <td>8-12 € / m</td>
            </tr>
            <tr>
              <td>Cokle</td>
              <td>2-4 € / m</td>
            </tr>
            <tr>
              <td>Gerovanje</td>
              <td>4-6 € / m</td>
            </tr>
            <tr>
              <td>Postavljanje mozaika</td>
              <td>20-25 € / m2</td>
            </tr>
            <tr>
              <td>
                Rušenje starih plocica u kupatilu sa demontažom sanitarija
              </td>
              <td>80-120 € / paušalno</td>
            </tr>
            <tr>
              <td>Iznošenje, utovar i odvoženje šuta na deponiju</td>
              <td>30-80 / paušalno</td>
            </tr>
            <tr>
              <td>Vodoinstalaterski radovi sa montažom sanitarija</td>
              <td>250-350 € / paušalno</td>
            </tr>
            <tr>
              <td>Električarski radovi</td>
              <td>70-100 € / paušalno</td>
            </tr>
            <tr>
              <td>
                Popunjavanje neravnina i rupa na zidovima i priprema za
                postavljanje keramike
              </td>
              <td>70-100 € / paušalno</td>
            </tr>
            <tr>
              <td>Hidroizolacija</td>
              <td>70-100 € / paušalno</td>
            </tr>
            <tr>
              <td>Molerski radovi</td>
              <td>60-90 € / paušalno</td>
            </tr>
            <tr>
              <td>
                Po potrebi malterisanje celog kupatila i izrada ravnajuceg sloja
              </td>
              <td>120-150 € / paušalno</td>
            </tr>
            <tr>
              <td>Parketarski radovi</td>
              <td>5-30 € / m2</td>
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
