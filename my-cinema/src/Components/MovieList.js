import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = (props) => {

    // Setting the data
    const [data, setData] = useState([]);

    //API URL and KEY
    const api = {
        mainUrl: "https://api.themoviedb.org/3/movie/now_playing?api_key=",
        secondUrl: "https://api.themoviedb.org/3/movie/",
        key: 'd8e889e21e38c8a7c1d98ed873f30f19'
    }

    //Fetch API for Now Playing
    const FetchData = () => {
        fetch(`${api.mainUrl}${api.key}`).then(response => {
            if (response.status !== 200) {
                console.log(`We cannot reach the movie database! Problem : ${response.status}`)
            }
            response.json().then(movieData => {
                setData(movieData.results);

            })
                .catch(err => {
                    console.log(`error ${err}`)
                })
        })
    }

    useEffect( () => FetchData(), []);

    // Map method to divide data as a part
    const film = data.map(movie => {
        return (

            <>
            <MovieCard
                id={movie.id}
                title={movie.title}
                genres={movie.genre_ids}
                release={movie.release_date}
                sum={movie.overview}
                rate={movie.vote_average}
                image={movie.poster_path}
            />
            </>
        );
    });

    return (
        <>
            <div className="allMovieCards">{film}</div>
        </>
    );
};

export default MovieList;