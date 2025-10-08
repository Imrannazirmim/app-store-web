import React from "react";
import downImg from "../../assets/icon-downloads.png";
import rateImg from "../../assets/icon-ratings.png";

const AppCard = ({ app }) => {
  const { image, title, downloads, ratingAvg, id } = app;
  return (
    <div className="card">
      <div className="flex flex-col gap-4">
        <img
          src={image}
          alt={title}
          className="object-cover h-full w-full rounded-md"
        />
        <span>{title}</span>
        <div className="flex justify-between items-center">
          <button className="flex items-center gap-2 text-xl">
            <img src={downImg} alt="icons" className="w-[1.4rem]" />
            {downloads}
          </button>
          <button className="flex items-center gap-2 text-xl">
            <img src={rateImg} alt="icons" className="w-[1.4rem]" />
            {ratingAvg}
          </button>
        </div>
      </div>
    </div>
  );
};
export default AppCard;
