import React from "react";

// React.Component < - component "C" upperCase
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
        // Detail컴포넌트를 호출할 때 redner부터 콜.
        // 그래서 여기서 location.state가 없는지 먼저 체크해서 에러뿜.
        // 렌더를 조건줘서 해결한다.
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