import React from "react";
import NewsCard from "./NewsCard";
import "../css/NewsCarousel.css";
import ArrowIcon2 from "../assets/arrow2.svg";

function NewsCarousel() {
  return (
    <div className="carousel-container">
      <img
      className="left-arrow"
        src={ArrowIcon2}
        alt="Arrow Icon"
        style={{ width: 24, height: 24 }}
      />
      <div className="item">
        <NewsCard />
      </div>
      <div className="item">
        <NewsCard />
      </div>
      <div className="item">
        <NewsCard />
      </div>
      <img
      className="right-arrow"
        src={ArrowIcon2}
        alt="Arrow Icon"
        style={{ width: 24, height: 24 }}
      />
    </div>
  );
}

export default NewsCarousel;
