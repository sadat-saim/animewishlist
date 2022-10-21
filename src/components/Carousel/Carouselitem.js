import React from "react";
import { Link } from "react-router-dom";

const Carouselitem = (props) => {
  const {
    title_english,
    title_japanese,
    rating,
    score,
    images,
    synopsis,
    year,
    genres,
    mal_id,
  } = props.anime;
  let genre = genres
    .reduce((ac, cv) => {
      return ac + "," + cv.name;
    }, "")
    .split(",")
    .filter((x) => x !== "")
    .join(",");

  return (
    <div>
      <div className="card carousel-item h-full w-[90vw] md:w-[65vw] lg:w-[47vw] bg-base-100 shadow-xl image-full my-3 mb-6 mr-2 md:mr-4">
        <figure>
          <img
            src={images.jpg.large_image_url}
            className="w-full"
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title block text-center font-bold">
            {title_english}({title_japanese})[{year || "20XX"}]
            <p>
              <span className="badge badge-secondary mx-3">{rating}</span>
              <span className="badge badge-accent">{genre}</span>
              <span className="badge badge-primary mx-3">{score}</span>
            </p>
          </h2>
          <p className="mt-6">
            {synopsis.slice(0, 300)}...
            <Link to={`/anime/${mal_id}`} className="block">
              <button className="btn btn-primary glass text-white mt-6">
                Details
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carouselitem;
