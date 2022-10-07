import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Detail.css";

const Details = () => {
  const animeDetails = useLoaderData().data;
  const {
    title_english,
    title_japanese,
    type,
    rating,
    score,
    images,
    synopsis,
    year,
    genres,
  } = animeDetails;
  let genre = genres
    .reduce((ac, cv) => {
      return ac + "," + cv.name;
    }, "")
    .split(",")
    .filter((x) => x !== "")
    .join(",");
  return (
    <div>
      <div
        className="hero min-h-screen bg-base-200"
        style={{
          backgroundImage: `url(${images.jpg.large_image_url})
        
        `,
        }}
      >
        <div className="hero-content flex-col rounded-none lg:rounded-lg lg:flex-row glass text-white">
          <img
            src={images.jpg.image_url}
            className="max-w-sm rounded-lg shadow-2xl"
            alt={title_english}
            loading="lazy"
          />
          <div>
            <h1 className="text-5xl font-bold">
              {title_english}({title_japanese})
            </h1>
            <p className="pt-3 text-sm text-center lg:text-left md:text-left text-slate-400">
              <span className="badge my-2">{type}</span>
              <span className="badge my-2 mx-3">{rating}</span>
              <span className="badge my-2">{genre}</span>
              <span className="badge my-2 badge-primary mx-3">{score}</span>
              {year && <span className="badge badge-secondary">{year}</span>}
            </p>
            <p className="py-6 pt-3 ">{synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
