import useStoreFetch from "../Hooks/useStoreFetch.jsx";
import Loading from "../Components/Ui/Loading.jsx";
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
      <div className="flex flex-col gap-2 text-center py-20">
        <h2 className="text-5xl font-semibold text-gray-800">
          Our All Application
        </h2>
        <p className="text-gray-500 font-semibold">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="gird-card ">
        {appsData?.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  );
};
export default Apps;
