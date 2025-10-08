import React from "react";
import useStoreFetch from "../../Hooks/useStoreFetch.jsx";
import Loading from "../Ui/Loading.jsx";
import TrendingAppCard from "./TrendingAppCard.jsx";
import { useNavigate } from "react-router";

const url = `/store.json`;
const TrendingApps = () => {
  const navigate = useNavigate();
  const { isLoading, error, appsData } = useStoreFetch(url);

  const sliceAppData = appsData.slice(0, 8);
  //loading spinner use
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (error) return <span>Failed loading Data. Please try again.</span>;
  return (
    <section className="px-20 py-10">
      <div>
        <h2>Trending Apps</h2>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="gird-card ">
        {sliceAppData &&
          sliceAppData.map((app) => <TrendingAppCard key={app.id} app={app} />)}
      </div>
      <div className="text-center">
        <button
          onClick={() => navigate("/apps")}
          className="btn bg-pink-800 text-white mt-10"
        >
          See More
        </button>
      </div>
    </section>
  );
};
export default TrendingApps;
