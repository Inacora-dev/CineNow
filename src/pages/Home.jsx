import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { getPopularMovies } from "../services/api";
import { searchMovies } from "../services/api";
import '../css/Home.css';

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error("Failed to fetch popular movies:", error);
        setError("Failed to fetch popular movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    if (loading) return; // Prevent multiple searches while loading

    setLoading(true);

    try {
      const searchResults = await searchMovies(searchQuery);
      if (searchResults.length === 0) {
        setError("No movies found for your search.");
      } else {
        setMovies(searchResults);
        setError(null);
      }
    } catch (error) {
      console.error("Failed to search movies:", error);
      setError("Failed to search movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="home">
        <div className="hero">
          <h1 className="title">Welcome to CineNow</h1>
          <p className="subtitle">Your one-stop destination for all things movies!</p>
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search for movies..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>

        {error && <div className="error">{error}</div>}

        {loading ? <div className="loading">Loading...</div> :
          <div className="movies-grid">
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        }
      </div>
    </>
  )
}

export default Home