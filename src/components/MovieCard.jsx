import React from "react";
import WatchList from "./WatchList";

function Card({
  movieObj,
  watchlist,
  poster_path,
  name,
  handleAddtoWatchlist,
  handleRemoveFromWatchlist,
}) {
  const doesContain = (movieObj) => {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) 
        return true;
      
    }
    return false;
  };
  return (
    <div
      className="h-[40vh] w-[170px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:curor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchlist(movieObj)}
          className="m-4 flex justify-center h-7 w-7 cursor-pointer rounded-lg bg-gray-500/50"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchlist(movieObj)}
          className="m-4 flex justify-center h-7 w-7 cursor-pointer rounded-lg bg-gray-500/50"
        >
          &#128525;
        </div>
      )}

      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default Card;
