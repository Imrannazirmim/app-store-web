import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import downImg from "../../assets/icon-downloads.png";
import rateImg from "../../assets/icon-ratings.png";
import InstallContext from "../../Context/InstallationContext.jsx";
import useInstallationStorage from "../../Hooks/useInstallationStorage.js";
import useStoreFetch from "../../Hooks/useStoreFetch.jsx";
import Loading from "../Ui/Loading.jsx";
import RatingChart from "./RatingChart.jsx";

const AppDetails = () => {
  const { appSelect, newAppDetails } = useContext(InstallContext);
  const { id } = useParams();
  const url = `/store.json`;
  const { isLoading, error, appsData } = useStoreFetch(url);
  const [install, setInstall] = useState(false);

  useEffect(() => {
    const installedApps = appSelect.some((app) => app.id.toString() === id);
    setInstall(installedApps);
  }, [appSelect, id]);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (error) return <span>Failed loading Data. Please try again.</span>;

  if (!Array.isArray(appsData) || appsData.length === 0) {
    return <span>No Apps Available.</span>;
  }
  const appDetails = appsData.find((item) => item.id.toString() === id);
  if (!appDetails) return <span>Not Data Found</span>;
  const {
    title,
    description,
    downloads,
    image,
    ratingAvg,
    ratings,
    reviews,
    size,
    companyName,
  } = appDetails;

  // handle install functionality create
  const handleInstallationApp = () => {
    if (!appDetails) return;
    if (install) return;
    newAppDetails(appDetails);
  };

  return (
    <section className="px-20 py-20">
      <section className="flex gap-10">
        <div>
          <img src={image} alt={title} className="rounded-md" />
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-3xl font-semibold">{title}</h2>

            <p className="mt-2 text-gray-700">
              Developed by{" "}
              <strong className="text-purple-500">{companyName}</strong>
            </p>
          </div>
          <hr className="text-gray-400 w-full" />
          <div className="flex gap-20">
            <div className="flex flex-col-reverse gap-4">
              <span className="text-[.9rem]">Downloads</span>
              <div className="flex gap-4 items-center">
                <h3 className="font-semibold text-4xl mt-1">{downloads}</h3>
                <img src={downImg} alt="download icon" />
              </div>
            </div>
            <div className="flex flex-col-reverse gap-4">
              <span className="text-[.9rem]">Avarage Ratings</span>
              <div className="flex gap-4 items-center">
                <h3 className="font-semibold text-4xl mt-1">{ratingAvg}</h3>
                <img src={rateImg} alt="download icon" />
              </div>
            </div>
            <div className="flex flex-col-reverse gap-4">
              <span className="text-[.9rem]">Total Reviews</span>
              <div className="flex gap-4 items-center">
                <h3 className="font-semibold text-4xl mt-1">{reviews}</h3>
                <img src={downImg} alt="download icon" />
              </div>
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={handleInstallationApp}
              disabled={install}
              className="btn bg-green-400 text-white font-semibold hover:bg-green-500"
            >
              {install ? "Install" : `Install Now (${size})`}
            </button>
          </div>
        </div>
      </section>
      {/* rating chart */}
      <section className="py-15">
        <h3 className="text-3xl font-semibold">Ratings</h3>

        <RatingChart ratings={ratings} />
      </section>
      <hr className="text-gray-400 w-full" />
      <section className="py-10">
        <h2 className="text-4xl font-semibold">Description</h2>
        <p className="mt-5 text-gray-600 text-justify">{description}</p>
        <p className="mt-5 text-gray-600 text-justify">{description}</p>
      </section>
    </section>
  );
};
export default AppDetails;
