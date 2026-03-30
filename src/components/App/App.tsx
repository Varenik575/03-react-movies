import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './App.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { fetchMovies } from '../../services/movieService';
import type { Movie } from '../../types/movie';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import MovieGrid from '../MovieGrid/MovieGrid';
import MovieModal from '../MovieModal/MovieModal';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);

  const closeModal = () => {
    setCurrentMovie(null);
  };

  const handleSearch = async (query: string) => {
    try {
      setIsError(false);
      setIsLoading(true);
      setMovies([]);
      const newMovies = await fetchMovies(query);
      setMovies(newMovies);
      if (newMovies.length === 0) {
        toast.error('No movies found for your request.');
      }
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelect = (selectedMovie: Movie) => {
    setCurrentMovie(selectedMovie);
  };

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {movies.length > 0 && (
        <MovieGrid onSelect={handleSelect} movies={movies} />
      )}
      {currentMovie && <MovieModal movie={currentMovie} onClose={closeModal} />}
    </>
  );
}

export default App;
