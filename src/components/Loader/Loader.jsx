import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={275}
    height={460}
    viewBox="0 0 275 460"
    backgroundColor="#c2c2c2"
    foregroundColor="#ecebeb"
  >
    <rect x="7" y="249" rx="19" ry="19" width="260" height="54" />
    <circle cx="137" cy="119" r="114" />
    <rect x="161" y="407" rx="7" ry="7" width="107" height="44" />
    <rect x="8" y="318" rx="7" ry="7" width="260" height="75" />
  </ContentLoader>
);

export default MyLoader;
