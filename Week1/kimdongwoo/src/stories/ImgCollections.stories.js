// ImgCollections.stories.js

import React from "react";
import ImgCollections from "../components/ImgCollections";

export default {
  title: 'Components/ImgCollections',
};

export const LogoComponent = (args) => <ImgCollections.Logo {...args} />;
LogoComponent.args = {
  width: 350,
  height: 100,
};
LogoComponent.argTypes = {
  width: { control: 'number' },
  height: { control: 'number' },
};

export const Subway1Component = () => <ImgCollections.Subway1 />;
export const Subway2Component = () => <ImgCollections.Subway2 />;
export const Subway3Component = () => <ImgCollections.Subway3 />;
export const Subway4Component = () => <ImgCollections.Subway4 />;


// import React from "react";
// import { Logo, Subway1, Subway2, Subway3, Subway4 } from "../components/ImgCollections";

// export default {
//   title: 'Components/ImgCollections',
// };

// export const LogoComponent = () => <Logo />;
// export const Subway1Component = () => <Subway1 />;
// export const Subway2Component = () => <Subway2 />;
// export const Subway3Component = () => <Subway3 />;
// export const Subway4Component = () => <Subway4 />;
