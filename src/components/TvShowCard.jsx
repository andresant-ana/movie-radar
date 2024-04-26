import { Link } from "react-router-dom";

import { FaStar, FaCalendarAlt } from "react-icons/fa";

const imagesURL = import.meta.env.VITE_IMG;

const TvShowCard = ({ show, showLink = true }) => {
  const rating = parseFloat((show.vote_average / 2).toFixed(1));
  const releaseYear = show.first_air_date.slice(0, 4);

  return (
    <div className="movie-card">
      <Link to={`/tv/${show.id}`}>
        <img src={imagesURL + show.poster_path} alt={show.name} />
      </Link>
      <div className="movie-card-info">
        <Link to={`/movie/${show.id}`}>
          <h4>{show.name}</h4>
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

export default TvShowCard;
