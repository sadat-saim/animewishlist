import React, { useEffect, useState } from "react";
import Carouselitem from "./Carouselitem";
import "./Carousel.css";

const Carousel = ({ topAnimes }) => {
  return (
    <div>
      <div className="custom-carousel flex mb-6">
        {topAnimes?.map((anime) => (
          <Carouselitem anime={anime}></Carouselitem>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
