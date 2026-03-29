import css from './MovieGrid.module.css';
import type { Movie } from '../../types/movie';

interface MovieGridProps {
  onSelect: (event: React.MouseEvent<HTMLLIElement>) => void;
  movies: Movie[];
}

//  id: number;
//     poster_path: string;
//     backdrop_path: string;
//     title: string;
//     overview: string;
//     release_date: string;
//     vote_average: number;

export default function MovieGrid({ onSelect, movies }: MovieGridProps) {
  return (
    <ul className={css.grid}>
      {movies.map(movie => {
        return (
          <li onClick={onSelect} key={movie.id} value={movie.id}>
            <div className={css.card}>
              <img
                className={css.image}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                loading="lazy"
              />
              <h2 className={css.title}>{movie.title}</h2>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
