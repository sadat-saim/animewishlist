import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { mal_id, images, title_english, synopsis } = props.anime;

  return (
    <>
      <div className="card  md:card-side lg:card-side shadow-xl">
        <figure className="w-full">
          <img
            src={images.jpg.image_url}
            className="w-full h-full"
            alt="Movie"
            loading="lazy"
          />
        </figure>
        <div className="card-body glass-bg">
          <h2 className="card-title">{title_english}</h2>
          <p>{synopsis.slice(0, 50)}...</p>
          <div className="card-actions justify-end">
            <Link to={`/anime/${mal_id}`}>
              <button className="btn glass btn-primary text-white">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
