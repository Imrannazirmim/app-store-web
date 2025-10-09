import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import downImg from "../../assets/icon-downloads.png";
import rateImg from "../../assets/icon-ratings.png";
import InstallContext from "../../Context/InstallationContext";

const InstallationCard = () => {
  const { appSelect, removeAppDetails } = useContext(InstallContext);
  const [sorting, setSorting] = useState("default");

  const handleUninstallation = (id) => {
    removeAppDetails(id);
    const toasti = appSelect.find((item) => item.id === id);
    toast(`Remove: ${toasti.title}`);
  };
  //sorting size

  const handleSortChange = (e) => {
    setSorting(e.target.value);
  };

  const sortData = () => {
    const sortCopyData = [...appSelect];
    if (sorting === "low-high") {
      return sortCopyData.sort((a, b) => a.size - b.size);
    } else if (sorting === "high-low") {
      return sortCopyData.sort((a, b) => b.size - a.size);
    } else return sortCopyData;
  };

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
          value={sorting}
          onChange={handleSortChange}
          className="border border-gray-300 p-2 rounded-md"
        >
          <option value="default">Sort By Size</option>
          <option value="low-high">Low-High</option>
          <option value="high-low">High-Low</option>
        </select>
      </div>
      <ToastContainer />

      <section>
        {sortData().map((app) => {
          const { image, title, downloads, ratingAvg, size, id } = app;
          return (
            <div
              key={id}
              className="flex justify-between items-center mb-4 border border-gray-300 rounded-md py-2 px-4"
            >
              <div className="flex gap-5">
                <img src={image} alt={title} className="w-[8rem] rounded-md" />
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
                <button
                  onClick={() => handleUninstallation(id)}
                  className="btn bg-green-400 hover:bg-green-300"
                >
                  Uninstall
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default InstallationCard;
