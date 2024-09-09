import React, { useEffect, useState } from "react";

import genreids from "../Utility/Gener";

function WatchList({ watchlist, setWatchlist, handleRemoveFromWatchlist }) {
  const [search, setSearch] = useState("");

  const [genrelist, setGenrelist] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  let sortIncresing = () => {
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist([...sortedIncreasing]);
  };
  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...sortedDecreasing]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenrelist(["All Genres", ...temp]);
    console.log(temp);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center my-4">
        {genrelist.map((genre,id) => {
          return (
            <div key={id}
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "flex justify-center h-[2.5rem] w-[7rem] items-center bg-blue-400 rounded-xl text-white font-bold m-4 cursor-pointer"
                  : "flex justify-center h-[2.5rem] w-[7rem] items-center bg-gray-400 rounded-xl text-white font-bold m-4 cursor-pointer"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div onChange={handleSearch} className="flex justify-center m-4">
        <input
          type="text"
          value={search}
          placeholder="Search Movies"
          className="h-[3rem] w-[25rem] bg-gray-200 px-2 outline-none"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>

              <th className="flex justify-center">
                <div onClick={sortIncresing} className="p-2">
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Rating</div>
                <div onClick={sortDecreasing} className="p-2">
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>

              <th>Popurality</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((movieObj) => {
                if(currGenre == "All Genres") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className=" h-[5rem] w-[8rem] "
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td
                      onClick={() => handleRemoveFromWatchlist(movieObj)}
                      className="text-red-800 cursor-pointer"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}

            {/* <tr className="border-b-2">
              <td className="flex items-center px-6 py-4">
                <img
                  className=" h-[5rem] w-[8rem] "
                  src={`https://cdn.shopify.com/s/files/1/0057/3728/3618/files/Alien.mpw.114883_500x749.jpg?v=1707409634`}
                />
                <div className="mx-10">The Matrix</div>
              </td>
              <td>8</td>
              <td>7.5</td>
              <td>Action</td>
              <td className="text-red-800">Delete</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
