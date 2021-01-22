import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movies.css";

const Movies = ({ year, title, summary, poster, genres }) => {
  return (
    <Link
      to={{
        pathname: "/movie-detail",
        state: {
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              // map 함수는 item 말고도 item number도 반환해 줌
              <li key={index} className="genres__genre">
                {genres[genres.length - 1] === genre ? genre : `${genre},`}
              </li>
            ))}
          </ul>
          <span className="movie__summary">
            {summary.slice(0, 300)} <span className="summar_more"> · · ·</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

Movies.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movies;
