import '../css/MovieCard.css';
import { useMovieContext } from '../contexts/MovieContext';

function MovieCard({ movie }) {
    const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
    const favorite = isFavorite(movie.id);

    function handleFavoriteClick(e) {
        e.preventDefault();
        if (favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={handleFavoriteClick}>
                        ❤
                    </button>
                </div>
            </div>
            <div className="movie-details">
                <div className="movie-info">
                    <h3 className="movie-title">{movie.title}</h3>
                    <p className="movie-release-date">{new Date(movie.release_date).getFullYear()}</p>
                </div>
                <div className='rating-select'>
                    <span className="user-rating">
                        {movie.vote_average.toFixed(1)}/10
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MovieCard