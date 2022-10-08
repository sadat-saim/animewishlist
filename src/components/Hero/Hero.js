import React, { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

const Hero = () => {
  const [animes, setAnimes] = useState([]);
  const [page, setPage] = useState(1);
  const [current, setCurrent] = useState(1);
  const topAnimes = useLoaderData().data;
  const myRef = useRef();

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime?page=${current + 1}`)
      .then((res) => res.json())
      .then((data) => {
        setAnimes([...animes, ...data.data]);
        setCurrent(data.pagination.current_page);
      });
    console.log(page, current);
  }, [page]);

  useEffect(() => {
    const obserber = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!!entry.isIntersecting) {
        setPage((page) => page + 1);
      }
    });
    obserber.observe(myRef.current);
  }, [animes]);

  return (
    <div className="container px-4 mx-auto mt-5">
      <h1 className="text-5xl font-black text-white mb-3">Top Animes</h1>
      <Carousel topAnimes={topAnimes}></Carousel>
      <h1 className="text-5xl font-black  text-white mb-6">Browse Animes</h1>
      <div
        id="cards"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 min-h-screen"
      >
        {animes?.map((anime, idx) => (
          <Card anime={anime} key={idx + anime.title_japanese}></Card>
        ))}
      </div>
      <h1 ref={myRef} className="invisible">
        I am invisible
      </h1>
    </div>
  );
};

export default Hero;
