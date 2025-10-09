import googleImg from "../../assets/app.png";
import heroImg from "../../assets/hero.png";
import appImg from "../../assets/icons8-app-store-48.png";

const HeroSection = () => {
  return (
    <>
      <section className="bg-[#E9E9E9] flex justify-center flex-col items-center ">
        <div className="flex flex-col items-center text-center gap-2 mt-16">
          <h2 className="text-5xl text-gray-700 font-semibold">We Build</h2>
          <span className="font-semibold text-5xl text-gray-700">
            <strong className="text-blue-600">Productive </strong>
            Apps
          </span>
          <p className="text-gray-500 text-[.9rem] p-2 font-medium">
            AtHERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br />
            Our goal is to turn your ideas into digital experiences that truly
            make an impact.
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
          <img
            src={heroImg}
            alt="hero image"
            className="object-cover w-full px-2"
          />
        </div>
      </section>

      <div className="bg-gradient-to-b from-[#6c47ff] to-[#9d5cff] flex flex-col justify-center gap-4 items-center py-16">
        <h3 className="text-[1.5rem] md:text-3xl lg:text-4xl font-bold text-white mt-6">
          Trusted by Millions, Built for You
        </h3>
        <div className="container mx-auto flex flex-col text-center md:text-justify md:flex-row justify-evenly space-x-5 w-full mt-10">
          <div className="flex flex-col gap-3">
            <small className="font-semibold text-[1rem] text-white">Total Downloads</small>
            <span className="text-5xl font-bold text-white">29.6M</span>
            <small className="text-xs text-white">
              21% more Than Last Month
            </small>
          </div>
          <div className="border-b w-82 md:w-0 mx-auto mt-3 mb-3 md:border-r border-dotted border-gray-300"></div>
          <div className="flex flex-col gap-3 ">
            <small className="font-semibold text-[1rem] text-white">Total Reviews</small>
            <span className="text-5xl font-bold text-white">904K</span>
            <small className="text-xs text-white">
              55% more Than Last Month
            </small>
          </div>
          <div className="border-b w-82 md:w-0 mx-auto mt-3 mb-3 md:border-r border-dotted border-gray-300"></div>

          <div className="flex flex-col gap-3 ">
            <small className="font-semibold text-[1rem] text-white">Active Apps</small>
            <span className="text-5xl font-bold text-white">232+</span>
            <small className="text-xs text-white">
              66 more will Launch
            </small>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
