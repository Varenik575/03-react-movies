import axios from "axios";
import type { Movie } from "../types/movie";
const AUTHORISATION_KEY = import.meta.env.VITE_TMDB_TOKEN;

interface MovieSearchResults {
    results: Movie[],
}


export const fetchMovies = async(query: string) => {
console.log(query);
const response = 
await axios.get<MovieSearchResults>(`https://api.themoviedb.org/3/search/movie?query=${query}`,
{
  headers: {
    Authorization: `Bearer ${AUTHORISATION_KEY}`,
  }
});

console.log(response.data.results);

};