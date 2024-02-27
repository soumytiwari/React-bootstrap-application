import React from 'react'

const MovieCard = ({movie}) => {

    if (!movie || !movie.Year) {
      // Handle the case where movie or Year is undefined
      return null;
    }

    return (
        <div className="movie">
          <div >
            <p>{movie.Year}</p>
          </div>

          <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
          </div>

          <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
          </div>
        </div>
    );
}

export default MovieCard;