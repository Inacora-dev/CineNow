import '../css/Favorites.css';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

function Favorite() {
  const { favorites } = useMovieContext();

  if (favorites.length === 0) {
   return (
      <div className="favorites-empty">
        <h2>No favorite movies added yet</h2>
        <p>Start adding movies to your favorites and they will appear here!</p>
      </div>
    );
  } else {
    return (
      <div className="favorites">
        <h2 className='favorites-title'>Your Favorite Movies</h2>
        <div className="movies-grid">
          {favorites.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
}

  export default Favorite