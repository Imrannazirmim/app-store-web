import { useContext } from "react";
import downImg from "../../assets/icon-downloads.png";
import rateImg from "../../assets/icon-ratings.png";
import InstallContext from "../../Context/InstallationContext";

const InstallationCard = () => {
  const { appSelect } = useContext(InstallContext);

  return (
    <section className="flex flex-col gap-4 py-10 px-20">
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-gray-700 mt-5">
          Your Installed Apps
        </h2>
        <p className="text-gray-700 mt-2 font-semibold">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center mt-5">
        <span>
          <strong className="text-purple-500">({appSelect.length})</strong> App
          Found
        </span>
        <select
          defaultValue="Sort By Size"
          className="border border-gray-300 p-2 rounded-md"
        >
          <option disabled={true}>Sort By Size</option>
          <option>Low-High</option>
          <option>High-Low</option>
        </select>
      </div>
      <section>
        {appSelect &&
          appSelect.map((app) => {
            const { image, title, downloads, ratingAvg, size, id } = app;
            return (
              <div
                key={id}
                className="flex justify-between items-center mb-4 border border-gray-300 rounded-md py-2 px-4"
              >
                <div className="flex gap-5">
                  <img
                    src={image}
                    alt={title}
                    className="w-[8rem] rounded-md"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="text- font-semibold">{title}</span>
                    <div className="flex gap-5">
                      <p className="flex items-center gap-1 text-xs font-semibold">
                        <img className="w-[.9rem]" src={downImg} alt="icon" />
                        {downloads}
                      </p>
                      <p className="flex items-center gap-1 text-xs font-semibold">
                        <img className="w-[.9rem]" src={rateImg} alt="icon" />
                        {ratingAvg}
                      </p>
                      <p className="text-xs font-semibold">{size}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn">Uninstall</button>
                </div>
              </div>
            );
          })}
      </section>
    </section>
  );
};

export default InstallationCard;
