import React from "react";
import { useParams } from "react-router";
import useStoreFetch from "../../Hooks/useStoreFetch.jsx";
import Loading from "../Ui/Loading.jsx";
import downImg from "../../assets/icon-downloads.png";
import rateImg from "../../assets/icon-ratings.png";

const AppDetails = () => {
  const { id } = useParams();
  const url = `/store.json`;
  const { isLoading, error, appsData } = useStoreFetch(url);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (error) return <span>Failed loading Data. Please try again.</span>;

  const appDetails = appsData.find((item) => item.id.toString() === id);
  console.log(appDetails);

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

  return (
    <section>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <div>
          <h2>{title}</h2>

          <p>
            Developed by{" "}
            <strong className="text-purple-500">{companyName}</strong>
          </p>
        </div>
        <hr />
        <div>
          <div>
            <span>Downloads</span>
            <h3>{downloads}</h3>
            <img src={downImg} alt="download icon" />
          </div>
          <div>
            <span>Avarage Ratings</span>
            <h3>{ratingAvg}</h3>
            <img src={rateImg} alt="rating icon" />
          </div>
          <div>
            <span>Total Reviews</span>
            <h3>{reviews}</h3>
            <img src={downImg} alt="download icon" />
          </div>
          <button className="btn">Install Now {size}</button>
        </div>
      </div>
    </section>
  );
};
export default AppDetails;
