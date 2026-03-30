import axios, { type AxiosResponse } from "axios";
import type { Movie } from "../types/movie";
const AUTHORISATION_KEY = import.meta.env.VITE_TMDB_TOKEN;

interface MovieSearchResults {
    results: Movie[];
}


export const fetchMovies = async(query: string):Promise<Movie[]> => {
const response:AxiosResponse<MovieSearchResults> = 
await axios.get<MovieSearchResults>(`https://api.themoviedb.org/3/search/movie?query=${query}`,
{
  headers: {
    Authorization: `Bearer ${AUTHORISATION_KEY}`,
  }
});
return response.data.results;
};
