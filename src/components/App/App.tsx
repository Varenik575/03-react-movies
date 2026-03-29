import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './App.module.css';
import {Toaster} from 'react-hot-toast';
import { fetchMovies } from '../../services/movieService';
import type { Movie } from '../../types/movie';

function App() {

const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <>
      <Toaster />
      <SearchBar onSearch={fetchMovies}/>
    </>
  );
}

export default App;
