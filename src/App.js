import logo from './logo.svg';
import {useState,useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL ='http://www.omdbapi.com?apikey=56ebc5cb';
const App = () => {
    const [movies, setMovies]=useState([]); 
    const [searchTerm ,setSearchTerm] =  useState("");

    useEffect(()=>{
      searchMovies('Batman')
  },[]);

  const searchMovies=async(title)=>{
      const response= await fetch(`${ API_URL }&s=${title}`);
      const data=await response.json();
      setMovies(data.Search);
  };
  return (
    <div className="app">
      <h1>MoviesWood</h1>
      <div className="search">
        <input placeholder='search for movies '
        value={searchTerm} 
        onChange={(e)=> setSearchTerm(e.target.value)}  
        />
    <img src={SearchIcon}
        alt="search"
      onClick={()=>searchMovies(searchTerm)}
    />
      </div>
      {
        movies?.length>0
        ?( <div className='container'>
        {movies.map((movie)=> (
          <MovieCard movie={movie}/>
        ))}
      </div>
        ) :(
          <div className='empty'>
            <h2>No Movies Found !</h2>
            </div>
        )
      }
    </div>
  );
}

export default App;
