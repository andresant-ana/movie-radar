import { Link } from "react-router-dom";

import { FaStar, FaCalendarAlt } from "react-icons/fa";

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  const rating = parseFloat((movie.vote_average / 2).toFixed(1));
  const releaseYear = movie.release_date.slice(0, 4);

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={imagesURL + movie.poster_path} alt={movie.title} />
      </Link>
      <div className="movie-card-info">
        <Link to={`/movie/${movie.id}`}>
          <h4>{movie.title}</h4>
        </Link>
        <p>
          <FaCalendarAlt className="iconCard" /> {releaseYear}
        </p>
        <p>
          <FaStar className="iconCard" /> {rating}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
