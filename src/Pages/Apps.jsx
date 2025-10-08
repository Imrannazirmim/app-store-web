import React from "react";
import useStoreFetch from "../Hooks/useStoreFetch.jsx";
import Loading from "../Components/Ui/Loading.jsx";
import TrendingAppCard from "../Components/Layout/TrendingAppCard.jsx";
import AppCard from "../Components/Layout/AppCard.jsx";

const url = `/store.json`;
const Apps = () => {
  const { isLoading, error, appsData } = useStoreFetch(url);
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
        {appsData && appsData.map((app) => <AppCard key={app.id} app={app} />)}
      </div>
    </section>
  );
};
export default Apps;
