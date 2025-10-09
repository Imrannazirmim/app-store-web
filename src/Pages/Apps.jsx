import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import AppCard from "../Components/Layout/AppCard.jsx";
import Loading from "../Components/Ui/Loading.jsx";
import useStoreFetch from "../Hooks/useStoreFetch.jsx";
import errorImg from "../assets/App-Error.png";

const url = `/store.json`;
const Apps = () => {
  const { isLoading, error, appsData } = useStoreFetch(url);
  const [searchTerm, setSearchTerm] = useState("");
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (error) return <span>Failed loading Data. Please try again.</span>;

  // search functionality
  const searchApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <section className="px-20 py-10 bg-[#E9E9E9] ">
      <div className="flex flex-col gap-2 text-center py-20">
        <h2 className="text-5xl font-semibold text-gray-800">
          Our All Application
        </h2>
        <p className="text-gray-500 font-semibold">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between py-8 ">
        <h2 className="text-xl">
          <strong className="text-purple-500">({appsData.length})</strong> Apps
          Found
        </h2>
        <div className="relative  max-w-sm px-4 sm:px-0">
          <CiSearch className="absolute left-0 top-1/2 z-1 ml-2  -translate-y-1/2 font-semibold text-lg" />

          <input
            type="text"
            className="py-2 px-8 bg-white rounded-md  text-black relative"
            placeholder="Search Apps"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="gird-card ">
        {searchApps.length > 0 ? (
          searchApps?.map((app) => <AppCard key={app.id} app={app} />)
        ) : (
          <section className="container mx-auto">
            <div className="w-full h-screen container flex flex-col mx-auto text-center gap-4">
              <img src={errorImg} alt="error image" />
              <h2 className="text-3xl font-semibold text-center">
                Oops, Apps not found!
              </h2>
            </div>
          </section>
        )}
      </div>
    </section>
  );
};
export default Apps;
