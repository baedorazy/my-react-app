import React from 'react';
import PropTypes from "prop-types";
import './Movie.css';

// 컴포넌트가 state가 필요가 없다면
// react.component를 상속받을 필요가 없어서 클래스로 생성안험.
function Movie({id, year, title, summary, poster, genres}) {
    return (
        <div className="movie" id={id} title={title}>
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

