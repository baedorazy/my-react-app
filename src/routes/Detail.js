import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        console.log(location);
        console.log(history);
        if(location.state === undefined) {
            history.push("/");
        }
    };
    render() {
        const {location} = this.props;
        const movie = location.state;
        if(location.state) {
            return (
                <div className="movie movie__detail">
                    <h1>{movie.title}</h1>
                    <div className="wrap">
                        <img src={movie.poster} alt=""/>
                        <div>
                            <h5 className="movie__year">{movie.year}</h5>
                            <ul className="movie__genres">
                                {
                                    movie.genres.map( (genre,index) => (
                                        <li key={index} id={index}>{genre}</li>
                                    ))
                                }
                            </ul>
                            <p className="movie__summary">{movie.summary}</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    };
}

export default Detail;