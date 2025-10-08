import React from "react";
import HeroSection from "../Components/Layout/HeroSection.jsx";
import TrendingApps from "../Components/Layout/TrendingApps.jsx";
import Loading from "../Components/Ui/Loading.jsx";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrendingApps />
    </>
  );
};
export default Home;
