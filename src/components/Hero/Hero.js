import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

const Hero = () => {
  const animes = useLoaderData().data;
  console.log(animes);
  return (
    <div className="container mx-auto mt-5">
      <Carousel></Carousel>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {animes.map((anime) => (
          <Card anime={anime}></Card>
        ))}
      </div>
    </div>
  );
};

export default Hero;
