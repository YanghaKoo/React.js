import React from "react"; 
import PropTypes from "prop-types";
import "./Movie.css";
import LinesEllipsis from "react-lines-ellipsis";

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie_Columns">
        <MoviePoster poster={poster} alt={title} />
      </div>

      <div className="Movie_Columns">
        <h1>{title}</h1>
        <div className="Movie_Genres">
          {genres.map((genre, index) => (
            <MoiveGenre genre={genre} key={index} />
          ))}
        </div>
      </div>

      <p className="Movie_Synopsis">        
        
        <LinesEllipsis
          text={synopsis}
          maxLine="3"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </p>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};

function MoiveGenre({ genre }) {
  return <span className="Movie_Genre">{genre} </span>;
}

MoiveGenre.propTypes = {
  genre: PropTypes.string.isRequired
};

function MoviePoster({ poster, alt }) {
  return <img src={poster} className="Movie_Poster" alt={alt} title={alt} />;
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Movie; 
