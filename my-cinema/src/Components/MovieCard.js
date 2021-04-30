import './MovieCard.css';

const MovieCard = (props) => {
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

    return (
        <>
            <div className="movieCard">
                <div className="moviePoster"><img src={imgUrl()} alt="" /></div>
                <div className="movieBanner">
                    <div className="movieInformation">
                        <div className="movieTitle">
                        <span>{props.title}</span>
                        </div>
                        <div className="movieType">
                        <span>{props.type}</span>
                        <span>{props.rate}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieCard;