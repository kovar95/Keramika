import React, { useState } from 'react';
import pic1 from '../images/keramika/1.jpg';
import pic2 from '../images/keramika/2.jpg';
import pic3 from '../images/keramika/3.jpg';
import pic4 from '../images/keramika/4.jpg';
import pic5 from '../images/keramika/5.jpg';
import pic6 from '../images/keramika/6.jpg';
import pic7 from '../images/keramika/7.jpg';
import pic8 from '../images/keramika/8.jpg';
import pic9 from '../images/keramika/9.jpg';
import pic10 from '../images/keramika/10.jpg';
import pic11 from '../images/keramika/11.jpg';
import pic12 from '../images/keramika/12.jpg';
import pic13 from '../images/keramika/13.jpg';
import pic14 from '../images/keramika/14.jpg';
import pic15 from '../images/keramika/15.jpg';
import pic16 from '../images/keramika/16.jpg';
import pic17 from '../images/keramika/17.jpg';
import pic18 from '../images/keramika/18.jpg';
import pic19 from '../images/keramika/19.jpg';
import pic20 from '../images/keramika/20.jpg';
import pic21 from '../images/keramika/21.jpg';

const Gallery = props => {
  const pictures = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
    pic10,
    pic11,
    pic12,
    pic13,
    pic14,
    pic15,
    pic16,
    pic17,
    pic18,
    pic19,
    pic20,
    pic21,
  ];

  const descriptions = [
    'Ovo su keramicke plocice',
    'Ovo su keramicke plocice',
    'Ovo su keramicke plocice',
    'Ovo su keramicke plocice',
    'Ovo su keramicke plocice',
    'Ovo su keramicke plocice',
    'Ovo su keramicke plocice',
    'Ovo su keramicke plocice',
    'Ovo su keramicke plocice',
    'Ovo su keramicke plocice',
    'Ovo su keramicke plocice',
    'Ovo su keramicke plocice',
    'Ovo su keramicke plocice',
    'Ovo su keramicke plocice',
    'Ovo su keramicke plocice',
    'Ovo su keramicke plocice',
    'Ovo su keramicke plocice',
    'Ovo su keramicke plocice',
    'Ovo su keramicke plocice',
    'Ovo su keramicke plocice',
    'Ovo su keramicke plocice',
  ];

  const [preview, setPreview] = useState(null);

  const previousPic = () => {
    if (preview === 0) {
      setPreview(20);
    } else {
      setPreview(preview - 1);
    }
  };

  const nextPic = () => {
    if (preview === 20) {
      setPreview(0);
    } else {
      setPreview(preview + 1);
    }
  };

  return (
    <div className="gallery">
      <h1>Galerija</h1>
      {pictures.map((pic, index) => (
        <div className="image" key={index} onClick={e => setPreview(index)}>
          <span>{descriptions[index]}</span>
          <img src={pic} alt="" />
        </div>
      ))}

      {preview !== null && (
        <div className="preview-outer">
          <div className="preview-inner">
            <img src={pictures[preview]} alt="" />
            <span
              className="arrow-left"
              onClick={e => previousPic()}
            >{`<`}</span>
            <span className="arrow-right" onClick={e => nextPic()}>{`>`}</span>
            <span className="desc">{descriptions[preview]}</span>
          </div>
          <span
            className="close-preview"
            onClick={e => setPreview(null)}
          >{`X`}</span>
        </div>
      )}
    </div>
  );
};

export default Gallery;
