import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import "./Movie.css";


function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
    <Link to={{
      pathname: `/movie/${id}`,
      state: {
        year,
        title,
        summary,
        poster,
        genres
      }
    }}> 

        <img src={poster} alt={title} title={title}></img>
      <div className="movie_data">
        <h4 className="movie__title">{title}</h4>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
            {genres.map( (genres, index) => (
                <li key={index} className="genres__genres">{genres}</li>
            ))}
        <p className="movie__summary">{summary.slice(0, 180)}....</p>
        </ul>
      </div>
      </Link>
  </div>

  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.arrayOf).isRequired
};

export default Movie;