import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
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
    // const [extraMovieData, setExtraMovieData] = useState([]);

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
    //Fetch API for Extra Information
    // const FetchExtraData = () => {
    //     fetch(`${api.secondUrl}${key}?api_key=${api.key}`).then(response => {
    //         if (response.status !== 200){
    //             console.log(`We cannot react the extra movie database! Problem : ${response.status}`)
    //         }
    //         response.json().then(extraData => {

    //         })
    //         .catch(error => {
    //             console.log(`Error ${error}`)
    //         })
    //     })

    // }

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