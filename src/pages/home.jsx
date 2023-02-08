import React from "react";
import {
  Hero,
  IconsInfo,
  Intro,
  About,
  WhyBuild,
  CardSlider,
  Technologies,
  Brands,
  HowWeBuild,
} from "../components/";

const Home = () => {
  return (
    <>
      <div style={{ marginTop: "200px" }}>
        <Hero />
        <IconsInfo />
        <Intro />
        <About />
        <WhyBuild />
        <CardSlider />
        <Technologies />
        <Brands/>
        <HowWeBuild/>
      </div>
    </>
  );
};

export default Home;
