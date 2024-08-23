import React from "react";
import MovieCard from './MovieCard'
import {useEffect, useState} from  'react';
import axios from 'axios';
import Pagination from "./Pagination";

function Movies({handleAddtoWatchlist,  handleRemoveFromWatchlist, watchlist }) {

  const [movies,setMovies]=useState([]);
  const [pageNo, setPageNo]=useState(1);

  const handlePrev=()=>
  {
    if(pageNo==1)
    {
      setPageNo(1)
    }
    else
    setPageNo(pageNo-1);
  }
  const handleNext=()=>
  {
    setPageNo(pageNo+1);
  }


  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9eaa89384f9b2598b84e1b3e6b87dbec&language=en-US&page=${pageNo}`)
    .then(function(res){
      console.log(res.data.results);
      setMovies(res.data.results)
    })
  },[pageNo])
  return (
    <div className="p-3">
      <div className="text-xl m-4 text-center font=bold">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-5">
        
        {movies.map((movieObj)=>{
          return <MovieCard key={movieObj.id} movieObj={movieObj} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist} poster_path={movieObj.poster_path}  name={movieObj.original_title}/> })
        }
      </div>
      <Pagination pageNo={pageNo} handlePrev={handlePrev} handleNext={handleNext} />

    </div>
  );
}

export default Movies;

// https://api.themoviedb.org/3/movie/popular?api_key=9eaa89384f9b2598b84e1b3e6b87dbec&language=en-US&page=2%27
