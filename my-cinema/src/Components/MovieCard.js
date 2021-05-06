import { useState, useEffect } from 'react';
import './MovieCard.css';
import Modal from "./Modal";

const MovieCard = (props) => {
    const [isShowing, setIsShowing] = useState(false);
    const [extraMovieData, setExtraMovieData] = useState([]);
    const [trailer, setTrailer] = useState([]);


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

    const FetchTrailerData = () => {
        fetch(`https://api.themoviedb.org/3/movie/460465/videos?api_key=d8e889e21e38c8a7c1d98ed873f30f19`).then(response => {
            if (response.status !== 200) {
                console.log(`We cannot reach the trailer database! Problem : ${response.status}`)
            }
            response.json().then(trailerData => {
                setTrailer(trailerData.results);
            })
                .catch(errMsg => {
                    console.log(`Error ${errMsg}`)
                })
        })
    };

    console.log(trailer)
    

    const duration = () => {
        const hours = Math.floor(props.duration / 60);
        const minutes = Math.floor(props.duration % 60);
        return (hours + ':' + minutes);
    }

    const imgUrl = () => {
        const imgUrl = 'https://image.tmdb.org/t/p/w500';
        const imagePath = props.image;
        return (imgUrl + imagePath)
    }
    function toggle() {
        setIsShowing(!isShowing);
        FetchExtraData();
        FetchTrailerData();
        return {
            isShowing,
            toggle,
        }
    };

    return (
        <>
            <div className="movieCard">
                <div className="moviePoster"><img onClick={toggle} src={imgUrl()} alt="" /></div>
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                    id={props.id}
                    title={props.title}
                    genres={props.genres}
                    release={props.release}
                    sum={props.sum}
                    rate={props.rate}
                    image={imgUrl()}
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