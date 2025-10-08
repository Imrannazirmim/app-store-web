import React from "react";
import googleImg from "../../assets/app.png";
import appImg from "../../assets/icons8-app-store-48.png";
import heroImg from "../../assets/hero.png";
const HeroSection = () => {
  return (
    <>
      <section className="flex justify-center flex-col items-center mt-16">
        <div className="flex flex-col items-center text-center gap-2">
          <h2 className="text-5xl text-gray-700 font-semibold">We Build</h2>
          <span className="font-semibold text-5xl text-gray-700">
            <strong className="text-blue-600">Productive </strong>
            Apps
          </span>
          <p className="text-gray-500 text-[.9rem] font-medium">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br />  Our goal is to turn
            your ideas into digital experiences that truly make an impact.
          </p>
          <div className="flex justify-between items-center gap-5 mt-5">
            <button className="btn flex items-center gap-2">
              <img src={googleImg} alt="google icons" className="w-[2rem]" />
              Google Play
            </button>
            <button className="btn flex items-center gap-2">
              <img src={appImg} alt="app store icons" className="w-[2rem]" />
              App Store
            </button>
          </div>
        </div>
        <div className="mt-10">
          <img src={heroImg} alt="hero image" />
        </div>
      </section>

      <div className="bg-blue-400 flex flex-col justify-center gap-4 items-center py-16">
        <h3 className="text-4xl font-bold text-white mt-6">
          Trusted by Millions, Built for You
        </h3>
        <div className="container mx-auto flex justify-evenly gap-5 w-full mt-10">
          <div className="flex flex-col gap-3">
            <small className="text-xs text-white">Total Downloads</small>
            <span className="text-5xl font-bold text-white">29.6M</span>
            <small className="text-xs text-white">
              21% more Than Last Month
            </small>
          </div>
          <div className="flex flex-col gap-3">
            <small className="text-xs text-white">Total Downloads</small>
            <span className="text-5xl font-bold text-white">29.6M</span>
            <small className="text-xs text-white">
              21% more Than Last Month
            </small>
          </div>
          <div className="flex flex-col gap-3">
            <small className="text-xs text-white">Total Downloads</small>
            <span className="text-5xl font-bold text-white">29.6M</span>
            <small className="text-xs text-white">
              21% more Than Last Month
            </small>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
