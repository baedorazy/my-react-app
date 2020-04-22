import React from 'react';
import axios from "axios";

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
        } = await axios.get("https://yts.mx/api/v2/list_movies.json");
        this.setState({movies: movies, isLoading: false}); // key value 동일하면 하나의 이름으로 가능.
        console.log(movies);
    };
    
    componentDidMount() {
        this.getMovies();
    }
    
    render() {
        const { isLoading } = this.state;
        return <div>{ this.state.isLoading ? "Loading...": "We are ready!" }</div>;
    }
}
export default App;


// yts-proxy.now.sh/list_movie.json