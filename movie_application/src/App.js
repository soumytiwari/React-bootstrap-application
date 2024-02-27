import "./App.css";
import { useEffect } from "react";
import SearchIcon from "./search.svg";

//  e94147f8

const API_URL = "http://www.omdbapi.com?apikey=e94147f8";

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Hungama");
  }, []); //  ', []' this part is used to assign its later value, whhic if left null, implies no change in value, i.e., same value

  const movie1 = {
    Title: "Hungama",
    Type: "movie",
    Year: "2003",
    imdbID: "tt0371735",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTVjMWY5MGUtNjU2MS00NzgxLWJhZWUtM2VjMDE4YWRkOWFjXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_SX300.jpg",
  };

  return (
    <>
      <div className="app">
        <h1>Movie Palace</h1>
        <div className="search">
          {/* if you just set a value and do on define the onChange function, you won't be ablr to type in */}
          <input
            type="text"
            placeholder="Search movies"
            value="title"
            onChange={() => {}}
          />
          <img src={SearchIcon} alt="search" onClick={() => {}} />
        </div>
      </div>
      <div className="container">
        <div className="movie">
          <div >
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title} />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
