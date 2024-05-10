// components/ImgCollections.js

import React from 'react';
import logo from '../img/logo.png';
import subway1 from '../img/subway1.png';
import subway2 from '../img/subway2.png';
import subway3 from '../img/subway3.png';
import subway4 from '../img/subway4.png';

const Logo = ({ width, height }) => <img src={logo} alt="Logo" width={width} height={height} />;
const Subway1 = () => <img src={subway1} alt="Subway 1" />;
const Subway2 = () => <img src={subway2} alt="Subway 2" />;
const Subway3 = () => <img src={subway3} alt="Subway 3" />;
const Subway4 = () => <img src={subway4} alt="Subway 4" />;

export default { Logo, Subway1, Subway2, Subway3, Subway4 };

// import logo from '../img/logo.png'
// import subway1 from '../img/subway1.png'
// import subway2 from '../img/subway2.png'
// import subway3 from '../img/subway3.png'
// import subway4 from '../img/subway4.png'
// //이미지를 객체화 하기
// export const ImgCollections = {
//   logo,
//   subway1,
//   subway2,
//   subway3,
//   subway4,
// };
