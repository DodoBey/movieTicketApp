import { useState, useEffect } from 'react';
import './MovieCard.css';
import Modal from "./Modal";

// Create Global Variable
const MovieCard = (props) => {
    const [isShowing, setIsShowing] = useState(false);
    const [extraMovieData, setExtraMovieData] = useState([]);
    const [trailer, setTrailer] = useState([]);
    const [genres, setGenres] = useState([]);
    const [duration, setDuration] = useState([]);
    const [imdbId, setImdbId] = useState([]);


    //API URL and KEY
    const api = {
        mainUrl: "https://api.themoviedb.org/3/movie/now_playing?api_key=",
        secondUrl: "https://api.themoviedb.org/3/movie/",
        key: 'd8e889e21e38c8a7c1d98ed873f30f19'
    }
    // Fetch API for Extra Information
    const FetchExtraData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${props.id}/credits?api_key=d8e889e21e38c8a7c1d98ed873f30f19`).then(response => {
            if (response.status !== 200) {
                console.log(`We cannot reach the extra movie database! Problem : ${response.status}`)
            }
            response.json().then(extraData => {
                setExtraMovieData(extraData.cast);
            })
                .catch(error => {
                    console.log(`Error ${error}`)
                })
        })

    };

    // Fetch API for Trailer
    const FetchTrailerData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=d8e889e21e38c8a7c1d98ed873f30f19`).then(response => {
            if (response.status !== 200) {
                console.log(`We cannot reach the trailer database! Problem : ${response.status}`)
            }
            response.json().then(trailerData => {
                setTrailer(trailerData.results[0].key);
            })
                .catch(errMsg => {
                    console.log(`Error ${errMsg}`)
                })
        })
    };


    // Fetch API for Genres and Duration

    const FetchGenreDuration = () => {
        fetch(`https://api.themoviedb.org/3/movie/${props.id}?api_key=d8e889e21e38c8a7c1d98ed873f30f19&language=en-US`).then(response => {
            if (response.status !== 200) {
                console.log(`We cannot reach the genres database! Problem : ${response.status}`)
            }
            response.json().then(genreData => {
                setGenres(genreData.genres);
                setDuration(genreData.runtime);
                setImdbId(genreData.imdb_id);
            })
        })
    }


    // Duration Converter Function
    const durationConverter = () => {
        const hours = Math.floor(duration / 60);
        const minutes = Math.floor(duration % 60);
        return (hours + ':' + minutes);
    }

    // IMG Url Function
    const imgUrl = () => {
        const imgUrl = 'https://image.tmdb.org/t/p/w500';
        const imagePath = props.image;
        return (imgUrl + imagePath)
    }

    // Onclick Function
    function toggle() {
        setIsShowing(!isShowing);
        FetchExtraData();
        FetchTrailerData();
        FetchGenreDuration();
        durationConverter();
        return {
            isShowing,
            toggle,
        }
    };


    // First 5 Data of Cast Info and Map Array of Starring
    const cast = extraMovieData.slice(0, 5);
    const starringInfo = [];
    const starringId = [];
    const starring = cast.map(actors => {
        return (
            starringInfo.push(actors.name),
            starringId.push(actors.id)
        )
    });

    const starringName = starringInfo.toString();

    //Trailer URL
    const trailerUrl = `https://www.youtube.com/embed/${trailer}`

    //IMDB Url
    const imdbUrl = `https://www.imdb.com/title/${imdbId}/`

    const genreName = [];
    const genreId = [];
    //Genres Map
    const movieGenres = genres.map(genre => {
        return (
            genreName.push(genre.name),
            genreId.push(genre.id)
        )
    });

    const genreInfo = genreName.toString();
    return (
        <>
            <div className="movieCard">
                <div className="moviePoster"><img onClick={toggle} src={imgUrl()} alt="" /></div>
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                    title={props.title}
                    genres={genreInfo}
                    genresId={genreId}
                    release={props.release}
                    sum={props.sum}
                    rate={props.rate}
                    image={imgUrl()}
                    duration={durationConverter()}
                    imdbId={imdbUrl}
                    starring={starringName}
                    starringId={starringId}
                    trailer={trailerUrl}
                />
                <div className="movieBanner">
                    <div className="movieInformation">
                        <div className="movieTitle">
                        </div>
                        <div className="movieType">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieCard;