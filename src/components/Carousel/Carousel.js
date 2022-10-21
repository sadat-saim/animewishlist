import React from "react";
import Carouselitem from "./Carouselitem";
import "./Carousel.css";

const Carousel = ({ topAnimes }) => {
  return (
    <div>
      <div className="custom-carousel flex mb-6">
        {topAnimes?.map((anime) => (
          <Carouselitem key={anime.title_japanese} anime={anime}></Carouselitem>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
