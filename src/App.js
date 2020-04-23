import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import './App.css';

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    
    getMovies = async () => {
        const {
            data: {
                data: {movies}
            }
        } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        this.setState({movies: movies, isLoading: false}); // key value 동일하면 하나의 이름으로 가능.
        console.log(movies);
    };
    
    // 마운트되면 getMovies call
    componentDidMount() {
        this.getMovies();
    };
    
    render() {
        const { isLoading, movies } = this.state;
        return <section className="container">
            {
                isLoading
                    ?
                        (
                            <div className="loader">
                                <span className="loader__text">Loading...</span>
                            </div>
                        )
                    :
                        (
                            <div className="movies">
                                {  movies.map(movie => (
                                    <Movie id={movie.id}
                                           key={movie.id}
                                           year={movie.year}
                                           summary={movie.summary}
                                           poster={movie.medium_cover_image}
                                           title={movie.title}
                                           genres={movie.genres}
                                    /> ))
                                }
                            </div>
                        )
            }
        </section>;
    }
}
export default App;
