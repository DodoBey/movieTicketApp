import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import MoviesComponent from './MoviesComponent';
import './MovieList.css';
import Modal from "./Modal";

const MovieList = (props) => {

    // Setting the data
    const [key, setKey] = useState("");
    const [title, setTitle] = useState("");
    const [duration, setDuration] = useState("");
    const [genres, setGenres] = useState("");
    const [release, setRelease] = useState("");
    const [sum, setSum] = useState("")
    const [rate, setRate] = useState("");
    const [image, setImage] = useState("");
    const [imdbid, setImdbid] = useState("");
    const [data, setData] = useState([]);

    //API URL and KEY
    const api = {
        mainUrl: "https://api.themoviedb.org/3/movie/now_playing?api_key=",
        key: 'd8e889e21e38c8a7c1d98ed873f30f19'
    }

    //Fetch API
    const FetchData = () => {
        fetch(`${api.mainUrl}${api.key}`).then(response => {
            if (response.status !== 200) {
                console.log(`We cannot reach the movie database! Problem : ${response.status}`)
            }
            response.json().then(movieData => {
                setData(movieData.results);
                // setKey(movieData.results.id);
                // setTitle(movieData.results.original_title);
                // setGenres(movieData.results.genre_ids);
                // setRelease(movieData.results.release_date);
                // setRate(movieData.results.vote_average);
                // setImage(movieData.results.poster_path);
            })
                .catch(err => {
                    console.log(`error ${err}`)
                })
        })
    }

    useEffect( () => FetchData(), []);
    console.log(data);

    // Map method to divide data as a part
    const film = data.map(movie => {
        return (
            <>
            <MovieCard
                key={movie.id}
                title={movie.title}
                genres={movie.genre_ids}
                release={movie.release_date}
                sum={movie.overview}
                rate={movie.vote_average}
                image={movie.poster_path}
            />
            <Modal
                key={movie.id}
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