import React, { useEffect, useState } from "react";
import Carouselitem from "./Carouselitem";
import "./Carousel.css";

const Carousel = () => {
  const [carousel, setCarousel] = useState([]);
  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((res) => res.json())
      .then((data) => setCarousel(data.data));
  }, []);
  useEffect(() => {
    console.log(carousel);
  }, [carousel]);

  return (
    <div>
      <div className="custom-carousel flex mb-6">
        {carousel.map((anime) => (
          <Carouselitem anime={anime}></Carouselitem>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
