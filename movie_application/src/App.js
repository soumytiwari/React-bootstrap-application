import "./App.css";
import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//  e94147f8

const API_URL = "http://www.omdbapi.com?apikey=e94147f8";

function App() {
  // start value of movies is an empty array
  const [movies, setMovies] = useState([]); // since input array containing info of movie/s
  const [searchTerm, setSearchTerm] = useState(""); // since input string

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    // console.log(data);
    // console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('All');
  }, []); //  ', []' this part is used to assign its later value, whhic if left null, implies no change in value, i.e., same value

  // const movie1 = {
  //   Title: "Hungama",
  //   Type: "movie",
  //   Year: "2003",
  //   imdbID: "tt0371735",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BNTVjMWY5MGUtNjU2MS00NzgxLWJhZWUtM2VjMDE4YWRkOWFjXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_SX300.jpg",
  // };

  return (
    <>
      <div className="app">
        <h1>Movie Palace</h1>
        <div className="search">
          {/* if you just set a value and do on define the onChange function, you won't be able to type in */}
          {/* ir still won't change if u keep a const value of value, keep it dynamic */}
          <input
            type="text"
            placeholder="Search movies"
            // constant
            // value="title"
            // dynamic
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            onKeyDown={(event) => {
              if(event.key === "Enter") {
                searchMovies(searchTerm);
              }
            }}
          />
          <img
            src={SearchIcon}
            alt="search"
            // to dynamically re-render
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {/* this passes 0th movie in the array list */}
          {/* for single movie */}
          {/* <MovieCard movie={movie[3]}/> */}
          {/* for array of movies */}
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
          {/* if ddo-not want to use return statement, then do not use curly braces in the function*/}
        </div>
      ) : (
        <div className="empty">
          <h2>No movie found</h2>
        </div>
      )}
    </>
  );
}

export default App;
