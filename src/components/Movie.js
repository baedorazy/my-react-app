import React from 'react';
import PropTypes from "prop-types";
import './Movie.css';
import { Link } from "react-router-dom";

function Movie({id, year, title, summary, poster, genres}) {
    return (
        <div className="movie" id={id} title={title}>
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
            <img src={poster} alt={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {
                        genres.map( (genre,index) => (
                            <li key={index} id={index}>{genre}</li>
                        ))
                    }
                </ul>
                <p className="movie__summary">{summary.slice(0,180)} ...</p>
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
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;

